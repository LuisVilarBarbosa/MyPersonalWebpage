<?php
	// Based on "https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php".
	function getUserIP() {
		$ipaddress = '';
		if (isset($_SERVER['HTTP_CLIENT_IP']))
			$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_X_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		else if(isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
			$ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_FORWARDED'];
		else if(isset($_SERVER['REMOTE_ADDR']))
			$ipaddress = $_SERVER['REMOTE_ADDR'];
		else
			$ipaddress = 'Unknown';
		return $ipaddress;
	}
	
	$ip = getUserIP();
	$ipdetails = geoip_record_by_name($ip);
	$ipcity = 'Unknown';
	if(isset($ipdetails['city']))
		$ipcity = $ipdetails['city'];

	include('templates/header.php');
	include('templates/client_location_page.php');
	include('templates/footer.php');
?>
