<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $question1 = $_POST['question1'];
    $question2 = $_POST['question2'];
    $question3 = $_POST['question3'];
    $ip_address = $_SERVER['REMOTE_ADDR'];

    $data = [
        "name" => $name,
        "email" => $email,
        "question1" => $question1,
        "question2" => $question2,
        "question3" => $question3,
        "timestamp" => date("Y-m-d H:i:s"),
        "ip_address" => $ip_address,
    ];

    $filename = "survey/response_" . date("Ymd_His") . ".json";
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode([
        "success" => true,
        "name" => $name,
        "timestamp" => $data['timestamp']
    ]);
    exit();
}
?>
