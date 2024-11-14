<?php
header('Content-Type: application/json');

$folderPath = 'survey/';
$files = array_diff(scandir($folderPath), array('..', '.'));

$responses = [];

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
        $fileContent = file_get_contents($folderPath . $file);
        
        $response = json_decode($fileContent, true);
        
        if ($response) {
            $responses[] = [
                'name' => $response['name'],
                'email' => $response['email'],
                'question1' => $response['question1'],
                'question2' => $response['question2'],
                'question3' => $response['question3'],
                'timestamp' => $response['timestamp']
            ];
        }
    }
}

echo json_encode($responses, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>
