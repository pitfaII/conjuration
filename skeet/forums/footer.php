<?php

/**
 * Copyright (C) 2008-2012 FluxBB
 * based on code by Rickard Andersson copyright (C) 2002-2008 PunBB
 * License: http://www.gnu.org/licenses/gpl.html GPL version 2 or higher
 */

// Make sure no one attempts to run this script "directly"
if (!defined('PUN'))
	exit;

$tpl_temp = trim(ob_get_contents());
$tpl_main = str_replace('<pun_main>', $tpl_temp, $tpl_main);
ob_end_clean();
// END SUBST - <pun_main>


// START SUBST - <pun_footer>
ob_start();

?>
<div id="brdfooter" class="block">
	<h2><span><?php echo $lang_common['Board footer'] ?></span></h2>
	<div class="box">
<?php

if (isset($footer_style) && ($footer_style == 'viewforum' || $footer_style == 'viewtopic') && $is_admmod)
{
	echo "\t\t".'<div id="modcontrols" class="inbox">'."\n";

	$token_url = '&amp;csrf_token='.pun_csrf_token();

	if ($footer_style == 'viewforum')
	{
		echo "\t\t\t".'<dl>'."\n";
		echo "\t\t\t\t".'<dt><strong>'.$lang_forum['Mod controls'].'</strong></dt>'."\n";
		echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;p='.$p.'">'.$lang_common['Moderate forum'].'</a></span></dd>'."\n";
		echo "\t\t\t".'</dl>'."\n";
	}
	else if ($footer_style == 'viewtopic')
	{
		echo "\t\t\t".'<dl>'."\n";
		echo "\t\t\t\t".'<dt><strong>'.$lang_topic['Mod controls'].'</strong></dt>'."\n";
		echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;tid='.$id.'&amp;p='.$p.'">'.$lang_common['Moderate topic'].'</a>'.($num_pages > 1 ? ' (<a href="moderate.php?fid='.$forum_id.'&amp;tid='.$id.'&amp;action=all">'.$lang_common['All'].'</a>)' : '').'</span></dd>'."\n";
		echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;move_topics='.$id.'">'.$lang_common['Move topic'].'</a></span></dd>'."\n";

		if ($cur_topic['closed'] == '1')
			echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;open='.$id.$token_url.'">'.$lang_common['Open topic'].'</a></span></dd>'."\n";
		else
			echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;close='.$id.$token_url.'">'.$lang_common['Close topic'].'</a></span></dd>'."\n";

		if ($cur_topic['sticky'] == '1')
			echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;unstick='.$id.$token_url.'">'.$lang_common['Unstick topic'].'</a></span></dd>'."\n";
		else
			echo "\t\t\t\t".'<dd><span><a href="moderate.php?fid='.$forum_id.'&amp;stick='.$id.$token_url.'">'.$lang_common['Stick topic'].'</a></span></dd>'."\n";

		echo "\t\t\t".'</dl>'."\n";
	}

	echo "\t\t\t".'<div class="clearer"></div>'."\n\t\t".'</div>'."\n";
}

?>
		<div id="brdfooternav" class="inbox">

			
			<?php

echo "\t\t\t".'<div class="conl">'."		<p>game4sense 2023</p>
			<ul>
				<li><span><a href='tos.php'>Terms and Conditions / Privacy policy</a></span></li>
			</ul>\n

";



echo "\t\t\t".'</div>'."\n";

?>
			
			
			
			
			
			<div class="clearer"></div>
		</div>
	</div>
</div>
<?php

// Display debug info (if enabled/defined)
if (defined('PUN_DEBUG'))
{
	echo '<p id="debugtime">[ ';

	// Calculate script generation time
	$time_diff = sprintf('%.3f', get_microtime() - $pun_start);
	echo sprintf($lang_common['Querytime'], $time_diff, $db->get_num_queries());

	if (function_exists('memory_get_usage'))
	{
		echo ' - '.sprintf($lang_common['Memory usage'], file_size(memory_get_usage()));

		if (function_exists('memory_get_peak_usage'))
			echo ' '.sprintf($lang_common['Peak usage'], file_size(memory_get_peak_usage()));
	}

	echo ' ]</p>'."\n";
}


// End the transaction
$db->end_transaction();

// Display executed queries (if enabled)
if (defined('PUN_SHOW_QUERIES'))
	display_saved_queries();

$tpl_temp = trim(ob_get_contents());
$tpl_main = str_replace('<pun_footer>', $tpl_temp, $tpl_main);
ob_end_clean();
// END SUBST - <pun_footer>


// Close the db connection (and free up any result data)
$db->close();

// Spit out the page
exit($tpl_main);
