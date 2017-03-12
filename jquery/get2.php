<?php
	header("Content-Type:text/html; charset=utf-8");
	echo "<?xml version='1.0' encoding='utf-8'?>".
		 "<comments>".
		 "<comment username='{$_REQUEST['username']}'>".
		 "<content>{$_REQUEST['content']}</content>".
		 "</comment>".
		 "<comments>";
?>