<header>
	<h3>Client info:</h3>
</header>

<section class="client_info">
	<?php
		$array_keys = ['HTTP_ACCEPT', 'HTTP_REFERER', 'HTTP_ACCEPT_LANGUAGE', 'HTTP_USER_AGENT', 'HTTP_ACCEPT_ENCODING', 'HTTP_CONNECTION', 'REMOTE_ADDR', 'REMOTE_PORT'];
		foreach($array_keys as $k) {
			$v = $_SERVER[$k]; ?>
			<p><?=$k?> => <?=$v?></p>
	<?php } ?>

	<h5>None of this data is kept by the server. This is just indicative about the data that the server receives from a client.</h5>
</section>
