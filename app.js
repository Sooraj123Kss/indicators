// India Economic Dashboard - Interactive JavaScript

// Dashboard Data
const dashboardData = {
  "overview": {
    "title": "India Economic Dashboard 2024-2025",
    "totalIndicators": 42,
    "positiveIndicators": 32,
    "positivePercentage": 76.2,
    "overallHealth": "Strong Positive",
    "lastUpdated": "October 2025"
  },
  "kpiMetrics": [
    {
      "name": "GDP Growth",
      "value": 6.5,
      "unit": "%",
      "trend": "positive",
      "trendValue": 0.3,
      "period": "FY 2024-25",
      "target": 6.0,
      "status": "Above Target"
    },
    {
      "name": "CPI Inflation",
      "value": 2.07,
      "unit": "%",
      "trend": "positive",
      "trendValue": -3.7,
      "period": "Aug 2025",
      "target": 4.0,
      "status": "Well Below Target"
    },
    {
      "name": "Unemployment Rate",
      "value": 5.2,
      "unit": "%",
      "trend": "positive",
      "trendValue": -0.4,
      "period": "July 2025",
      "target": 5.0,
      "status": "Slightly Above Target"
    },
    {
      "name": "Forex Reserves",
      "value": 702.97,
      "unit": "$B",
      "trend": "positive",
      "trendValue": 15.2,
      "period": "Sep 2025",
      "target": 600.0,
      "status": "Excellent"
    },
    {
      "name": "Manufacturing PMI",
      "value": 57.7,
      "unit": "pts",
      "trend": "positive",
      "trendValue": 4.4,
      "period": "Sep 2025",
      "target": 50.0,
      "status": "Strong Expansion"
    },
    {
      "name": "Services PMI",
      "value": 60.9,
      "unit": "pts",
      "trend": "positive",
      "trendValue": 8.1,
      "period": "Sep 2025",
      "target": 50.0,
      "status": "Strong Expansion"
    }
  ],
  "economicGrowth": {
    "gdpGrowthTrend": [
      {"period": "FY 2022-23", "value": 6.5},
      {"period": "FY 2023-24", "value": 8.2},
      {"period": "FY 2024-25", "value": 6.5},
      {"period": "FY 2025-26", "value": 6.3}
    ],
    "inflationTrend": [
      {"period": "May 2025", "value": 4.75},
      {"period": "Jun 2025", "value": 3.54},
      {"period": "Jul 2025", "value": 1.61},
      {"period": "Aug 2025", "value": 2.07}
    ],
    "pmiData": [
      {"sector": "Manufacturing", "current": 57.7, "previous": 59.3, "average": 53.3},
      {"sector": "Services", "current": 60.9, "previous": 62.9, "average": 52.8},
      {"sector": "Composite", "current": 65.2, "previous": 64.1, "average": 53.0}
    ]
  },
  "tradeExternal": {
    "exportComposition": [
      {"category": "Merchandise", "value": 437.42, "percentage": 53.3},
      {"category": "Services", "value": 387.50, "percentage": 46.7}
    ],
    "tradeBalance": {
      "exports": 820.93,
      "imports": 915.19,
      "deficit": -94.26
    },
    "exportGrowth": [
      {"sector": "Overall", "growth": 2.31, "value": 820.93},
      {"sector": "Merchandise", "growth": -1.2, "value": 437.42},
      {"sector": "Services", "growth": 8.65, "value": 387.50}
    ],
    "forexReserves": [
      {"month": "Jun 2025", "value": 685.2},
      {"month": "Jul 2025", "value": 692.3},
      {"month": "Aug 2025", "value": 698.5},
      {"month": "Sep 2025", "value": 702.97}
    ]
  },
  "employmentInvestment": {
    "unemploymentByCategory": [
      {"category": "Overall", "value": 5.2, "trend": "improving"},
      {"category": "Urban", "value": 6.7, "trend": "concern"},
      {"category": "Rural", "value": 4.5, "trend": "good"},
      {"category": "Female", "value": 8.5, "trend": "concern"}
    ],
    "unemploymentTrend": [
      {"month": "May 2025", "value": 5.1},
      {"month": "Jun 2025", "value": 5.6},
      {"month": "Jul 2025", "value": 5.2}
    ],
    "fdiData": [
      {"year": "FY 2023-24", "value": 44.3},
      {"year": "FY 2024-25", "value": 50.0},
      {"year": "Growth", "value": 13.0}
    ]
  },
  "fiscalBusiness": {
    "fiscalIndicators": [
      {"indicator": "Fiscal Deficit", "current": 4.8, "target": 4.1, "trend": "improving"},
      {"indicator": "Government Debt", "current": 81.92, "target": 60.0, "trend": "concern"},
      {"indicator": "External Debt", "current": 18.7, "target": 25.0, "trend": "good"}
    ],
    "businessSentiment": [
      {"metric": "Manufacturing PMI", "value": 57.7, "status": "expansion"},
      {"metric": "Services PMI", "value": 60.9, "status": "strong expansion"},
      {"metric": "New Orders", "value": 62.1, "status": "strong growth"},
      {"metric": "Employment", "value": 54.2, "status": "growth"}
    ]
  },
  "sectoralAssessment": [
    {"sector": "Economic Growth & GDP", "indicators": 12, "positive": 10, "health": "Strong", "score": 83.3},
    {"sector": "Inflation & Price Stability", "indicators": 5, "positive": 3, "health": "Moderate", "score": 60.0},
    {"sector": "Employment & Labor Market", "indicators": 9, "positive": 5, "health": "Moderate", "score": 55.6},
    {"sector": "Trade & External Sector", "indicators": 10, "positive": 8, "health": "Strong", "score": 80.0},
    {"sector": "Investment & Capital Flows", "indicators": 5, "positive": 5, "health": "Strong", "score": 100.0},
    {"sector": "Business Sentiment & Sectors", "indicators": 5, "positive": 5, "health": "Strong", "score": 100.0},
    {"sector": "Fiscal & Debt Management", "indicators": 4, "positive": 3, "health": "Strong", "score": 75.0}
  ]
};

// Chart Color Palette
const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
const chartColors = {
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  background: '#1e293b',
  text: '#f1f5f9'
};

// Global chart instances
let chartInstances = {};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
  initializeKPICards();
  initializeCharts();
  initializeEventListeners();
  initializeInteractivity();
  createUpdateIndicator();
});

// Create update indicator
function createUpdateIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'update-indicator';
  indicator.id = 'updateIndicator';
  indicator.textContent = 'Data Updated Successfully!';
  document.body.appendChild(indicator);
}

// Show update notification
function showUpdateNotification() {
  const indicator = document.getElementById('updateIndicator');
  indicator.classList.add('show');
  setTimeout(() => {
    indicator.classList.remove('show');
  }, 3000);
}

// KPI Cards Generation
function initializeKPICards() {
  const kpiGrid = document.getElementById('kpiGrid');
  
  dashboardData.kpiMetrics.forEach(metric => {
    const kpiCard = createKPICard(metric);
    kpiGrid.appendChild(kpiCard);
  });
}

function createKPICard(metric) {
  const card = document.createElement('div');
  card.className = `kpi-card ${getTrendClass(metric.trend)}`;
  card.dataset.metric = metric.name.toLowerCase().replace(/\s+/g, '-');
  
  const trendIcon = metric.trend === 'positive' ? '↗' : '↘';
  const trendClass = metric.trend === 'positive' ? 'positive' : 'negative';
  
  card.innerHTML = `
    <div class="kpi-header">
      <div class="kpi-title">${metric.name}</div>
      <div class="kpi-trend ${trendClass}">${trendIcon}</div>
    </div>
    <div class="kpi-value">${metric.value}${metric.unit}</div>
    <div class="kpi-status">${metric.status}</div>
    <div class="kpi-period">${metric.period}</div>
  `;
  
  // Add click interaction
  card.addEventListener('click', () => highlightRelatedCharts(metric.name));
  
  return card;
}

function getTrendClass(trend) {
  switch(trend) {
    case 'positive': return 'positive';
    case 'negative': return 'error';
    default: return 'warning';
  }
}

// Chart Initialization
function initializeCharts() {
  createGDPInflationChart();
  createPMIChart();
  createInflationGauge();
  createExportCompositionChart();
  createTradeBalanceChart();
  createForexChart();
  createUnemploymentChart();
  createEmploymentTrendChart();
  createFDIChart();
  createFiscalChart();
  createBusinessSentimentChart();
  createSectoralChart();
}

// GDP & Inflation Chart
function createGDPInflationChart() {
  const ctx = document.getElementById('gdpInflationChart').getContext('2d');
  
  chartInstances.gdpInflation = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.economicGrowth.gdpGrowthTrend.map(item => item.period),
      datasets: [
        {
          type: 'bar',
          label: 'GDP Growth (%)',
          data: dashboardData.economicGrowth.gdpGrowthTrend.map(item => item.value),
          backgroundColor: colors[0],
          borderColor: colors[0],
          borderWidth: 1
        },
        {
          type: 'line',
          label: 'CPI Inflation (%)',
          data: [4.75, 3.54, 1.61, 2.07],
          borderColor: colors[1],
          backgroundColor: colors[1],
          fill: false,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// PMI Chart
function createPMIChart() {
  const ctx = document.getElementById('pmiChart').getContext('2d');
  
  chartInstances.pmi = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.economicGrowth.pmiData.map(item => item.sector),
      datasets: [
        {
          label: 'Current PMI',
          data: dashboardData.economicGrowth.pmiData.map(item => item.current),
          backgroundColor: colors[0]
        },
        {
          label: 'Previous PMI',
          data: dashboardData.economicGrowth.pmiData.map(item => item.previous),
          backgroundColor: colors[1]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          min: 40,
          max: 70,
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Inflation Gauge (Doughnut)
function createInflationGauge() {
  const ctx = document.getElementById('inflationGauge').getContext('2d');
  
  chartInstances.inflationGauge = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Current Inflation', 'Target Range'],
      datasets: [{
        data: [2.07, 3.93], // Current vs remaining to 6% upper limit
        backgroundColor: [chartColors.success, '#334155'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      }
    }
  });
}

// Export Composition Chart
function createExportCompositionChart() {
  const ctx = document.getElementById('exportCompositionChart').getContext('2d');
  
  chartInstances.exportComposition = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dashboardData.tradeExternal.exportComposition.map(item => item.category),
      datasets: [{
        data: dashboardData.tradeExternal.exportComposition.map(item => item.value),
        backgroundColor: [colors[0], colors[1]],
        borderWidth: 2,
        borderColor: chartColors.background
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      }
    }
  });
}

// Trade Balance Chart
function createTradeBalanceChart() {
  const ctx = document.getElementById('tradeBalanceChart').getContext('2d');
  
  chartInstances.tradeBalance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Exports', 'Imports', 'Trade Balance'],
      datasets: [{
        data: [
          dashboardData.tradeExternal.tradeBalance.exports,
          dashboardData.tradeExternal.tradeBalance.imports,
          dashboardData.tradeExternal.tradeBalance.deficit
        ],
        backgroundColor: [chartColors.success, chartColors.warning, chartColors.error]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Forex Reserves Chart
function createForexChart() {
  const ctx = document.getElementById('forexChart').getContext('2d');
  
  chartInstances.forex = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dashboardData.tradeExternal.forexReserves.map(item => item.month),
      datasets: [{
        label: 'Forex Reserves ($B)',
        data: dashboardData.tradeExternal.forexReserves.map(item => item.value),
        borderColor: colors[0],
        backgroundColor: colors[0] + '20',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Unemployment Chart
function createUnemploymentChart() {
  const ctx = document.getElementById('unemploymentChart').getContext('2d');
  
  const getTrendColor = (trend) => {
    switch(trend) {
      case 'good': return chartColors.success;
      case 'concern': return chartColors.error;
      default: return chartColors.warning;
    }
  };
  
  chartInstances.unemployment = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.employmentInvestment.unemploymentByCategory.map(item => item.category),
      datasets: [{
        label: 'Unemployment Rate (%)',
        data: dashboardData.employmentInvestment.unemploymentByCategory.map(item => item.value),
        backgroundColor: dashboardData.employmentInvestment.unemploymentByCategory.map(item => getTrendColor(item.trend))
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Employment Trend Chart
function createEmploymentTrendChart() {
  const ctx = document.getElementById('employmentTrendChart').getContext('2d');
  
  chartInstances.employmentTrend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dashboardData.employmentInvestment.unemploymentTrend.map(item => item.month),
      datasets: [{
        label: 'Unemployment Rate (%)',
        data: dashboardData.employmentInvestment.unemploymentTrend.map(item => item.value),
        borderColor: colors[0],
        backgroundColor: colors[0] + '20',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// FDI Chart
function createFDIChart() {
  const ctx = document.getElementById('fdiChart').getContext('2d');
  
  chartInstances.fdi = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.employmentInvestment.fdiData.map(item => item.year),
      datasets: [{
        label: 'FDI Inflows ($B)',
        data: dashboardData.employmentInvestment.fdiData.map(item => item.value),
        backgroundColor: [colors[0], colors[1], chartColors.success]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Fiscal Chart
function createFiscalChart() {
  const ctx = document.getElementById('fiscalChart').getContext('2d');
  
  chartInstances.fiscal = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dashboardData.fiscalBusiness.fiscalIndicators.map(item => item.indicator),
      datasets: [
        {
          label: 'Current (%)',
          data: dashboardData.fiscalBusiness.fiscalIndicators.map(item => item.current),
          backgroundColor: colors[0]
        },
        {
          label: 'Target (%)',
          data: dashboardData.fiscalBusiness.fiscalIndicators.map(item => item.target),
          backgroundColor: colors[1]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Business Sentiment Chart
function createBusinessSentimentChart() {
  const ctx = document.getElementById('businessSentimentChart').getContext('2d');
  
  chartInstances.businessSentiment = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: dashboardData.fiscalBusiness.businessSentiment.map(item => item.metric),
      datasets: [{
        label: 'Business Sentiment',
        data: dashboardData.fiscalBusiness.businessSentiment.map(item => item.value),
        borderColor: colors[0],
        backgroundColor: colors[0] + '20',
        pointBackgroundColor: colors[0]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        r: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' },
          pointLabels: { color: chartColors.text }
        }
      }
    }
  });
}

// Sectoral Assessment Chart
function createSectoralChart() {
  const ctx = document.getElementById('sectoralChart').getContext('2d');
  
  chartInstances.sectoral = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: dashboardData.sectoralAssessment.map(item => item.sector.split(' & ')[0]),
      datasets: [{
        label: 'Health Score (%)',
        data: dashboardData.sectoralAssessment.map(item => item.score),
        backgroundColor: colors.slice(0, dashboardData.sectoralAssessment.length)
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: chartColors.text }
        }
      },
      scales: {
        x: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        },
        y: {
          ticks: { color: chartColors.text },
          grid: { color: '#334155' }
        }
      }
    }
  });
}

// Event Listeners
function initializeEventListeners() {
  // Refresh button
  document.getElementById('refreshBtn').addEventListener('click', refreshDashboard);
  
  // Filter reset
  document.getElementById('resetFilters').addEventListener('click', resetFilters);
  
  // Filter changes
  document.getElementById('timePeriodFilter').addEventListener('change', applyFilters);
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  document.getElementById('assessmentFilter').addEventListener('change', applyFilters);
}

// Interactivity
function initializeInteractivity() {
  // Add hover effects to chart cards
  document.querySelectorAll('.chart-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

function highlightRelatedCharts(metricName) {
  // Remove existing highlights
  document.querySelectorAll('.chart-card').forEach(card => {
    card.classList.remove('highlight');
  });
  
  // Add highlights based on metric
  const relatedCharts = getRelatedCharts(metricName);
  relatedCharts.forEach(chartId => {
    const chartCard = document.querySelector(`#${chartId}`).closest('.chart-card');
    if (chartCard) {
      chartCard.classList.add('highlight');
    }
  });
  
  // Auto-remove highlights after 3 seconds
  setTimeout(() => {
    document.querySelectorAll('.chart-card').forEach(card => {
      card.classList.remove('highlight');
    });
  }, 3000);
}

function getRelatedCharts(metricName) {
  const relationships = {
    'GDP Growth': ['gdpInflationChart'],
    'CPI Inflation': ['gdpInflationChart', 'inflationGauge'],
    'Unemployment Rate': ['unemploymentChart', 'employmentTrendChart'],
    'Forex Reserves': ['forexChart', 'tradeBalanceChart'],
    'Manufacturing PMI': ['pmiChart', 'businessSentimentChart'],
    'Services PMI': ['pmiChart', 'businessSentimentChart']
  };
  
  return relationships[metricName] || [];
}

function refreshDashboard() {
  const btn = document.getElementById('refreshBtn');
  const originalText = btn.innerHTML;
  
  // Show loading state
  btn.innerHTML = '<span class="loading"></span>Refreshing...';
  btn.disabled = true;
  
  // Simulate refresh delay
  setTimeout(() => {
    // Add small random variations to simulate real-time updates
    dashboardData.kpiMetrics.forEach((metric, index) => {
      const variation = (Math.random() - 0.5) * 0.2;
      const newValue = Math.max(0, metric.value + variation);
      
      // Update the metric value
      dashboardData.kpiMetrics[index].value = Math.round(newValue * 100) / 100;
      
      // Update trend randomly
      const trends = ['positive', 'positive', 'warning']; // Bias towards positive
      dashboardData.kpiMetrics[index].trend = trends[Math.floor(Math.random() * trends.length)];
    });
    
    // Refresh KPI cards
    document.getElementById('kpiGrid').innerHTML = '';
    initializeKPICards();
    
    // Update charts with new data
    Object.values(chartInstances).forEach(chart => {
      if (chart && chart.update) {
        chart.update('none'); // Update without animation for faster refresh
      }
    });
    
    // Update timestamp
    const now = new Date();
    const timeString = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    document.querySelector('.timestamp').textContent = 'Last Updated: ' + timeString;
    
    // Show success notification
    showUpdateNotification();
    
    // Reset button
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 2000);
}

function applyFilters() {
  const timePeriod = document.getElementById('timePeriodFilter').value;
  const category = document.getElementById('categoryFilter').value;
  const assessment = document.getElementById('assessmentFilter').value;
  
  // Visual feedback for filter application
  const filterGroups = document.querySelectorAll('.filter-group select');
  filterGroups.forEach(select => {
    select.style.borderColor = select.value !== 'all' && select.value !== 'current' ? '#3b82f6' : '#334155';
  });
  
  // This would filter charts based on selections
  // For demo purposes, we'll just add visual feedback
  console.log('Filters applied:', { timePeriod, category, assessment });
}

function resetFilters() {
  // Reset all filter dropdowns
  document.getElementById('timePeriodFilter').value = 'current';
  document.getElementById('categoryFilter').value = 'all';
  document.getElementById('assessmentFilter').value = 'all';
  
  // Reset visual feedback
  const filterGroups = document.querySelectorAll('.filter-group select');
  filterGroups.forEach(select => {
    select.style.borderColor = '#334155';
  });
  
  // Apply the reset filters
  applyFilters();
}
