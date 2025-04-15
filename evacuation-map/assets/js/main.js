// 初始化地圖
const map = L.map('map').setView([25.0330, 121.5654], 13);

// 添加 OpenStreetMap 圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 圖層群組 - 預設不添加到地圖
const dangerLayer = L.layerGroup();
const shelterLayer = L.layerGroup();
let routeControl = null;

// 標記變數
let startMarker = null;
let endMarker = null;

// 載入資料
async function loadData() {
    try {
        const [dangerousAreas, shelters] = await Promise.all([
            fetch('assets/data/dangerous_areas.json').then(r => r.json()),
            fetch('assets/data/shelters.json').then(r => r.json())
        ]);

        // 添加危險區域
        dangerousAreas.features.forEach(area => {
            // 創建緩衝區
            const center = L.latLng(area.geometry.coordinates[1], area.geometry.coordinates[0]);
            const circle = L.circle(center, {
                radius: area.properties.buffer,
                color: '#ff3b30',
                fillColor: '#ff3b30',
                fillOpacity: 0.2,
                weight: 2
            }).addTo(dangerLayer);

            // 添加標籤
            circle.bindPopup(area.properties.name);
        });

        // 添加避難設施
        shelters.features.forEach(shelter => {
            L.marker([
                shelter.geometry.coordinates[1],
                shelter.geometry.coordinates[0]
            ], {
                icon: L.divIcon({
                    className: 'shelter-marker',
                    html: '<div class="shelter-icon"></div>',
                    iconSize: [12, 12]
                })
            })
            .bindPopup(`
                <strong>${shelter.properties.name}</strong><br>
                容納人數: ${shelter.properties.capacity}人
            `)
            .addTo(shelterLayer);
        });
    } catch (error) {
        console.error('載入資料失敗:', error);
        alert('載入資料時發生錯誤，請重新整理頁面。');
    }
}

// 點選地圖事件處理
map.on('click', function(e) {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    
    if (!startMarker) {
        startMarker = L.marker(e.latlng, {
            draggable: true
        }).addTo(map);
        startInput.value = `${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
        
        startMarker.on('dragend', function(event) {
            const position = event.target.getLatLng();
            startInput.value = `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`;
            updateRoute();
        });
    } else if (!endMarker) {
        endMarker = L.marker(e.latlng, {
            draggable: true
        }).addTo(map);
        endInput.value = `${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
        
        endMarker.on('dragend', function(event) {
            const position = event.target.getLatLng();
            endInput.value = `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`;
            updateRoute();
        });
    }
});

// 計算實際步行時間
function calculateWalkingTime(distanceKm) {
    // 平均步行速度 4 km/h (考慮路況、坡度等因素)
    const walkingSpeed = 4;
    // 計算基本時間（小時）
    const baseTimeHours = distanceKm / walkingSpeed;
    // 轉換為分鐘
    const baseTimeMinutes = Math.round(baseTimeHours * 60);
    
    // 考慮疏散情況的額外因素
    const crowdFactor = 1.2; // 人群擁擠因素
    const emergencyFactor = 1.1; // 緊急情況因素
    
    // 計算最終時間
    const totalMinutes = Math.round(baseTimeMinutes * crowdFactor * emergencyFactor);
    
    return {
        normalTime: baseTimeMinutes,
        evacuationTime: totalMinutes
    };
}

// 計算開車時間
function calculateDrivingTime(distanceKm) {
    // 市區平均車速 25 km/h (考慮路況、紅綠燈等因素)
    const drivingSpeed = 25;
    // 計算基本時間（小時）
    const baseTimeHours = distanceKm / drivingSpeed;
    // 轉換為分鐘
    const baseTimeMinutes = Math.round(baseTimeHours * 60);
    
    // 考慮疏散情況的額外因素
    const trafficFactor = 1.5; // 交通擁擠因素
    const emergencyFactor = 1.2; // 緊急情況因素
    
    // 計算最終時間
    const totalMinutes = Math.round(baseTimeMinutes * trafficFactor * emergencyFactor);
    
    return {
        normalTime: baseTimeMinutes,
        evacuationTime: totalMinutes
    };
}

// 更新路線
function updateRoute() {
    if (startMarker && endMarker) {
        const transportMode = document.querySelector('input[name="mode"]:checked').value;
        
        if (routeControl) {
            map.removeControl(routeControl);
        }

        routeControl = L.Routing.control({
            waypoints: [
                startMarker.getLatLng(),
                endMarker.getLatLng()
            ],
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1',
                profile: transportMode === 'walking' ? 'foot' : 'driving'
            }),
            lineOptions: {
                styles: [{
                    color: '#007aff',
                    weight: 4,
                    opacity: 0.7
                }]
            },
            createMarker: function() { return null; },
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: true
        }).addTo(map);

        // 顯示路線資訊
        routeControl.on('routesfound', function(e) {
            const routes = e.routes;
            const route = routes[0];
            const distanceKm = (route.summary.totalDistance / 1000).toFixed(1);
            
            // 使用新的時間計算方法
            const times = transportMode === 'walking' 
                ? calculateWalkingTime(parseFloat(distanceKm))
                : calculateDrivingTime(parseFloat(distanceKm));
            
            document.querySelector('.route-info').style.display = 'block';
            document.getElementById('route-details').innerHTML = `
                <p>總距離: ${distanceKm} 公里</p>
                <p>一般情況預估時間: ${formatTime(times.normalTime)}</p>
                <p>疏散情況預估時間: ${formatTime(times.evacuationTime)}</p>
                <p class="note">* 疏散時間已考慮人群擁擠和緊急情況因素</p>
            `;
        });
    }
}

// 格式化時間顯示
function formatTime(minutes) {
    if (minutes < 60) {
        return `${minutes} 分鐘`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} 小時 ${remainingMinutes} 分鐘`;
}

// 規劃路線
document.getElementById('plan-route').addEventListener('click', updateRoute);

// 重置功能
document.getElementById('reset').addEventListener('click', function() {
    if (startMarker) {
        map.removeLayer(startMarker);
        startMarker = null;
    }
    if (endMarker) {
        map.removeLayer(endMarker);
        endMarker = null;
    }
    if (routeControl) {
        map.removeControl(routeControl);
        routeControl = null;
    }
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
    document.querySelector('.route-info').style.display = 'none';
});

// 交通方式變更
document.querySelectorAll('input[name="mode"]').forEach(input => {
    input.addEventListener('change', updateRoute);
});

// 圖層控制
document.getElementById('show-danger').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(dangerLayer);
    } else {
        map.removeLayer(dangerLayer);
    }
});

document.getElementById('show-shelters').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(shelterLayer);
    } else {
        map.removeLayer(shelterLayer);
    }
});

// 初始化載入資料
loadData(); 