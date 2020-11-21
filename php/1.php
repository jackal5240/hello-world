<?php
// 定義要開啟的目錄
$dir = "http://9datong.com/water/";

// 用 opendir() 開啟目錄，開啟失敗終止程式
$handle = @opendir($dir) or die("Cannot open " . $dir);

echo "<b>Files in " . $dir . ":</b><br/>";

// 用 readdir 讀取檔案內容
while($file = readdir($handle)){
    // 將 "." 及 ".." 排除不顯示
    if($file != "." && $file != ".."){
    echo "$file<br/>";
}
}

// 關閉目錄
closedir($handle);
?>


//Account: jackal11@kimo.com

//Password: 53091223