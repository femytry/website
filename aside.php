<aside>
	<?php
	if (logged_in() === true) {
		header('Location: loggedin.php');
	} else {
		include 'index.php';
	}
	?>
</aside>