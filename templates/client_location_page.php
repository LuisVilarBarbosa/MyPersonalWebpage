<header>
	<h3>Client location:</h3>
</header>

<section class="client_location">
	<?php
		$ip = $_SERVER['REMOTE_ADDR'];
		$details = geoip_record_by_name($ip);
		$location = $details['city'];
	?>
	<p>Your IP address: <?=$ip?></p>
	<p>Your location (city): <?=$location?></p>
	
	<p class="extra_data">More data: </p>
	<?php foreach($details as $k => $v) { ?>
			<p><?=$k?> => <?=$v?></p>
	<?php } ?>

	<h5>None of this data is kept by the server. This is just indicative about the data that is possible to get from a client.</h5>
</section>
