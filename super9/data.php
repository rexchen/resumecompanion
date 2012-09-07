<?php
header('Content-type: application/json');

switch ($_GET['t']) {
    case "1":
        echo '
        {
            "Result": "1",
            "MemberID": "0a4252a0-7e70-11d0-a5d6-28db04c10000"
        }';
        break;
    case "2":
        echo '
        {
            "Result": "0",
            "Message": "密碼格式錯誤/不正確的Email格式"
        }';
        break;
    case "3":
        echo '
        {
            "Result": "1",
            "Message": "密碼格式錯誤/不正確的Email格式"
        }';
        break;
    case "4":
        echo 
        '{
            "Result": "0",
            "Message": "資料錯誤",
            "Questions": [
                {
                    "Question": "轉開電視，你最常看的節目是屬於.....",
                    "Anwsers": [
                        {
                            "MasterNodesID": 1,
                            "MasterNodesName": "1111"
                        },
                        {
                            "MasterNodesID": 2,
                            "MasterNodesName": "222"
                        },
                        {
                            "MasterNodesID": 3,
                            "MasterNodesName": "3333"
                        },
                        {
                            "MasterNodesID": 4,
                            "MasterNodesName": "444"
                        },
                        {
                            "MasterNodesID": 5,
                            "MasterNodesName": "新聞"
                        },
                        {
                            "MasterNodesID": 6,
                            "MasterNodesName": "新聞"
                        },
                        {
                            "MasterNodesID": 7,
                            "MasterNodesName": "新聞"
                        },
                        {
                            "MasterNodesID": 8,
                            "MasterNodesName": "新聞"
                        }
                    ],
                    "Nums": 1
                },
                {
                    "Question": "2轉開電視，你最常看的節目是屬於",
                    "Anwsers": [
                        {
                            "MasterNodesID": 9,
                            "MasterNodesName": "2體育"
                        },
                        {
                            "MasterNodesID": 10,
                            "MasterNodesName": "2綜藝"
                        },
                        {
                            "MasterNodesID": 11,
                            "MasterNodesName": "2新聞"
                        },
                        {
                            "MasterNodesID": 12,
                            "MasterNodesName": "2新聞"
                        },
                        {
                            "MasterNodesID": 13,
                            "MasterNodesName": "2新聞"
                        },
                        {
                            "MasterNodesID": 14,
                            "MasterNodesName": "2新聞"
                        },
                        {
                            "MasterNodesID": 15,
                            "MasterNodesName": "2新聞"
                        },
                        {
                            "MasterNodesID": 16,
                            "MasterNodesName": "2新聞"
                        }
                    ],
                    "Nums": 1
                },
                {
                    "Question": "3轉開電視，你最常看的節目是屬於",
                    "Anwsers": [
                        {
                            "MasterNodesID": 17,
                            "MasterNodesName": "3體育"
                        },
                        {
                            "MasterNodesID": 18,
                            "MasterNodesName": "3綜藝"
                        },
                        {
                            "MasterNodesID": 19,
                            "MasterNodesName": "3新聞"
                        },
                        {
                            "MasterNodesID": 20,
                            "MasterNodesName": "3新聞"
                        },
                        {
                            "MasterNodesID": 21,
                            "MasterNodesName": "3新聞"
                        },
                        {
                            "MasterNodesID": 22,
                            "MasterNodesName": "3新聞"
                        },
                        {
                            "MasterNodesID": 23,
                            "MasterNodesName": "3新聞"
                        },
                        {
                            "MasterNodesID": 24,
                            "MasterNodesName": "3新聞"
                        }
                    ],
                    "Nums": 1
                }
            ]
        }';
        break;
    case "5":
        echo '
        {
            "Result": "1",
            "Message": "資料錯誤",
            "Category": [
                "類別1",
                "類別2"
            ],
            "Friends": [
                {
                    "MemberID": "1-1-1-1",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "2-2-2-2",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "3-3-3-3",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "4-4-4-4",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "5-5-5-5",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "6-6-6-6",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "7-7-7-7",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "8-8-8-8",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "9-9-9-9",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "0-0-0-0",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "a-a-a-a",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                },
                {
                    "MemberID": "b-b-b-b",
                    "PicUrl": "i12/1535.jpg",
                    "Similarity": "85",
                    "Sex": "1",
                    "CityName": "桃園市",
                    "SameIntersts": [
                        "類別1",
                        "類別2",
                        "類別3",
                        "類別4",
                        "類別5"
                    ]
                }
            ]
        }';
        break;
    case '6':
        echo '
        {
            "Products": [
                {
                    "ProdID": "1",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "2",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "3",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "4",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "5",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "6",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "7",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "8",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "9",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                },
                {
                    "ProdID": "10",
                    "PicUrl": "http://punapp.tw/wp-content/uploads/2011/04/iphone_and_ipad_150x150.png",
                    "ProdName": "iPhone 4S"
                }
            ]
        }';
        break;
    case "7":
        echo '
        {
            "Result": "1",
            "Message": ""
        }';
        break;
    case "8":
        echo '
        {
            "Result": "1",
            "Message": "系統有問題"
        }';
        break;
}
?>