<?php
$image_dir = 'images/';
$category = 'clothes';
$title = 'Clothes';

$rows = 5;
$cols = 5;
$total_images = $rows * $cols;


$all_files = glob($image_dir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE | GLOB_ERR); 

if (!empty($all_files)) {
    shuffle($all_files);
    $image_files = array_slice($all_files, 0, $total_images);
    $found_images = true;
} else {
    $found_images = false;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?> Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Image Gallery Selector</h1>
    
    <div id="gallery-container">
        <h2>Image Gallery for: <span><?php echo $title; ?></span></h2>
        
        <?php if (!$found_images): ?>
            <p style="color: red; font-weight: bold;">
                ❌ Error: Could not find any standard image files (.jpg, .jpeg, .png, .gif) in the '<?php echo $image_dir; ?>' folder. 
                Please ensure your images are in the correct format and location.
            </p>
            <p>
                <a href="index.html">← Back to Selection</a>
            </p>
        <?php else: ?>
            <table id="image-table">
                <?php
                $counter = 0;
                for ($i = 0; $i < $rows; $i++) {
                    echo "<tr>";
                    for ($j = 0; $j < $cols; $j++) {
                        echo "<td>";
                        
                        if (isset($image_files[$counter])) {
                            $imagePath = $image_files[$counter];
                            echo "<img src='{$imagePath}' alt='{$category} image " . ($counter + 1) . "'>";
                        } else {
                            echo "<p style='font-size: 10px; color: #aaa;'>End of images</p>";
                        }
                        
                        echo "</td>";
                        $counter++;
                    }
                    echo "</tr>";
                }
                ?>
            </table>
            
            <a href="index.html">← Back to Selection</a>
        <?php endif; ?>

    </div>

</body>
</html>