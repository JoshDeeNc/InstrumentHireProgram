

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();



  
  var lineChart = function()
  {
      var config = {
          type: 'line',
          data:
          {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
              {
                  label: "Success",
                  borderColor: color.success._500,
                  pointBackgroundColor: color.success._700,
                  pointBorderColor: 'rgba(0, 0, 0, 0)',
                  pointBorderWidth: 1,
                  borderWidth: 1,
                  pointRadius: 3,
                  pointHoverRadius: 4,
                  data: [
                      23,
                      75,
                      60, -48, -9,
                      26,
                      45
                  ],
                  fill: false
              }]
          },
          options:
          {
              responsive: true,
              title:
              {
                  display: false,
                  text: 'Line Chart'
              },
              tooltips:
              {
                  mode: 'index',
                  intersect: false,
              },
              hover:
              {
                  mode: 'nearest',
                  intersect: true
              },
              scales:
              {
                  xAxes: [
                  {
                      display: true,
                      scaleLabel:
                      {
                          display: false,
                          labelString: '6 months forecast'
                      },
                      gridLines:
                      {
                          display: true,
                          color: "#f2f2f2"
                      },
                      ticks:
                      {
                          beginAtZero: true,
                          fontSize: 11
                      }
                  }],
                  yAxes: [
                  {
                      display: true,
                      scaleLabel:
                      {
                          display: false,
                          labelString: 'Profit margin (approx)'
                      },
                      gridLines:
                      {
                          display: true,
                          color: "#f2f2f2"
                      },
                      ticks:
                      {
                          beginAtZero: true,
                          fontSize: 11
                      }
                  }]
              }
          }
      };
      new Chart($("#lineChart > canvas").get(0).getContext("2d"), config);
  }
 