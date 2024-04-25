var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://41223153.github.io/wcm2024 \n 網誌:\xa0 https://41223153.github.io/wcm2024/blog \n 簡報:\xa0 https://41223153.github.io/wcm2024/reveal \xa0 \n 倉儲:\xa0 https://github.com/41223153/wcm2024 \xa0\xa0 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'W6', 'text': '\n \xa0 \n \xa0 \n \xa0 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'git的發展歷史', 'text': '創作人: \n Linus Torvalds （林納斯·托瓦茲）是一位電腦科學家和軟體工程師，出生於芬蘭的赫爾辛基，於1969年12月28日出生。 他最著名的貢獻是創建了Linux內核，並成為了Linux開源作業系統的主要開發者之一。 Linus Torvalds 於1991年開始編寫Linux內核，當時他還是大學生，Linux最初是作為他的個人專案開始的。 Linus Torvalds同時也是開源運動的積極支持者和倡導者，他認為開源軟體開發模式能夠促進創新、共享知識，並有助於建構更穩健、更安全的軟體。 \n 他在2005年為了管理Linux核心專案而創立了Git。 Git的設計受到了分散式版本控制系統BitKeeper的啟發。 \n Linus Torvalds以其在作業系統和開源軟體領域的貢獻而聞名於世，他的工作對於推動電腦技術的發展和普及發揮了重要作用。 因其對開源軟件的貢獻和領導地位而成為了科技界的重要人物之一。 \n 歷史 : \n Linus Torvalds於1991年開始編寫Linux內核，當時他還是芬蘭赫爾辛基大學的學生。 \n git問世於西元2005因Linus Torvalds為了管理自己創建的Linux 核心專案，而創建了 G it 版本控制系統，他認為現有的版 本控制系統不符合他的需求，因此決定寫一個新的系統。 \n 發展 : GitHub是一個基於 G it的程式碼託管平台，於2008年成立。 GitHub的出現大大推動了 G it的普及和發展，成為了全球最大的程式碼託管平台之一。 \n \n 隨著時間的推移， G it的社群不斷壯大，包括了各種貢獻者、開發者和使用者。 這個龐大的社區為 G it的發展和改進做出了巨大貢獻， Git不僅在開源社群中廣泛應用。 也在企業中得到了採用，許多大型公司和組織都在使用 G it作為其主要的版本控制系統。 \n \n 優點 : \n 易於學習和使用： 儘管 G it 具有強大的功能，但它的命令和操作也相對簡單直觀。 \n 版本追蹤與歷史記錄： G it 能夠精確追蹤文件的每一次修改，並保留完整的歷史記錄。 \n 可以輕鬆地查看文件的修改記錄、回滾到之前的版本等。 \n 強大的分支管理： G it 的分支管理功能非常強大，開發者可以輕鬆建立、合併和刪除分支， \n 使得開發團隊可以更靈活地進行。 \n 開源： G it 是一個開源項目，開發者可以自由地查看、修改和分享 G it 的原始碼，同時也可得到來自社群的技術支援和貢獻。 \n 速度和效能： G it 被設計成高效快速的版本控制系統，能夠處理大型專案和大量數據，且具有優秀的效能表現。 \n \n \xa0 \n', 'tags': '', 'url': 'git的發展歷史.html'}, {'title': 'git常用指令', 'text': 'git add. \n// 將所有修改的文件新增至暫存區//\ngit commit -m "訊息字串"\n//提交暫存區的文件至本地儲存庫，並附上提交訊息//\ngit push\n //推送本地儲存庫的提交至遠端儲存庫//\ngit pull \n//拉取遠端儲存庫的更新//\ngit version\n //查看當前git的版本//\ngit status\n //查看工作區和暫存區的狀態//\ngit log \n//查看歷史提交紀錄//\ngit clone [URL] [本地目錄] \n \n \n \n', 'tags': '', 'url': 'git常用指令.html'}, {'title': 'git的運用', 'text': '當你想要進行 Git 客戶端和伺服器的實際演示時，你需要有一個 Git 伺服器和至少一個 Git 客戶端。通常情況下，你可以在本地或者使用雲服務提供商來設置 Git 伺服器。 \n 以下是一個簡單的步驟來進行實際的 Git 客戶端和伺服器演示： \n 設置Git伺服器: \n \xa0 \xa0 \xa0  1.選擇伺服器:  你可以選擇在本地搭建 Git 伺服器，或者使用雲服務提供商（如 GitHub、GitLab、Bitbucket 等）。 \n \xa0 \xa0 \xa0 \xa02.安裝 Git:  在伺服器上安裝 Git，如果你使用的是雲服務提供商，則不需要手動安裝 Git。 \n \xa0 \xa0 \xa0 \xa0 3.建立倉庫:  在伺服器上創建一個空的 Git 倉庫，你可以使用  git init --bare  命令來創建一個裸倉庫，或 者在雲服務提供商上通過介面創建倉庫。 \n 設置Git客戶端 : \n \xa0 \xa0 \xa0 \xa0 1.安裝 Git:  在你的本地機器上安裝 Git 客戶端。 \n \xa0 \xa0 \xa0 \xa02.配置用戶信息:  在客戶端上設置 Git 用戶名和郵箱，你可以使用以下命令:\xa0 \n git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"\n \n \xa0 \xa0 \xa0 \xa03.克隆倉庫 : 使用\xa0 git clone \xa0命令將伺服器上的倉庫克隆到本地。例如： \n git clone username@server:/path/to/repository\n \n 進行演示: \n \xa0 \xa0 \xa0 \xa0 1.進行修改 : 在本地客戶端對項目進行一些修改，比如創建、編輯或刪除文件。 \n \xa0 \xa0 \xa0 \xa0 2.提交更改:  使用  git add  將修改添加到暫存區，然後使用  git commit  提交更改到本地倉庫。 \n \xa0 \xa0 \xa0 \xa0 3.推送到伺服器:  使用  git push  命令將本地的提交推送到伺服器上。 \n \xa0 \xa0 \xa0 \xa0 4.拉取更新:  如果其他人在伺服器上進行了修改，你可以使用  git pull  命令將更新拉取到本地。 \n \n', 'tags': '', 'url': 'git的運用.html'}, {'title': '期中整理', 'text': '', 'tags': '', 'url': '期中整理.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};