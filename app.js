var isDataListSupported = 'options' in document.createElement('datalist');
document.getElementById('hour').value = (new Date()).getHours();

if (isDataListSupported) {
	var options = document.getElementById('zone').getElementsByTagName('option');
	var datalist = document.getElementById('zones');
	for(var i = 0; i < options.length; i++) {
		var option = document.createElement('OPTION');
		option.value = options[i].innerHTML;
		datalist.appendChild(option);
	}
	document.getElementById('zone').className = 'hidden';
	document.getElementById('zone5').className = '';
}

function convert() {
	var hour = document.getElementById('hour').value;
	var zone = isDataListSupported ? document.getElementById('zone5').value.split('(').pop().split(')').shift() : document.getElementById('zone').value;

	var local = moment(moment(new Date()).format("YYYY-MM-DDT" + hour + ":00:00" + zone));
	var diff = parseInt(local.format('DD')) - (new Date()).getDate();
	var prefix = '';
	if(diff < 0) prefix = '<span>Previous day</span>';
	else if(diff > 0) prefix = '<span>Next day</span>';
	document.getElementById('result').innerHTML = prefix + local.format('HH') + ':00';
}