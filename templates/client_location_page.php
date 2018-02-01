<header>
	<h3>Client location:</h3>
</header>

<section class="client_location">
	<p>Your IP address: <?=$ip?></p>
	<p>Your location (city): <?=$ipcity?></p>
	
	<?php if($ipdetails) { ?>
		<p class="extra_data">More data: </p>
		<?php foreach($ipdetails as $k => $v) { ?>
			<p><?=$k?> => <?=$v?></p>
		<?php } ?>
	<?php } ?> 

	<h5>None of this data is kept by the server. This is just indicative about the data that is possible to get from a client.</h5>
</section>
