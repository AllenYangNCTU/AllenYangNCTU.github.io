let Electoral_System = `<div id="doc" class="markdown-body container-fluid comment-inner comment-enabled" data-hard-breaks="true"><h1 id="111-年度資料庫程式設計作業---投票--問卷系統" data-id="111-年度資料庫程式設計作業---投票--問卷系統"><span>111 年度資料庫程式設計作業 - 投票 / 問卷系統</span></h1><h2 id="主頁（未登入）" data-id="主頁（未登入）"><span>主頁（未登入）</span></h2><ul>
<li><span>會員</span><strong><span>登入</span></strong><span>按鈕</span></li>
<li><span>會員</span><strong><span>註冊</span></strong><span>按鈕</span></li>
<li><span>中上有</span><strong><span>廣告牆</span></strong><span>的置入</span></li>
<li><span>主體，</span><strong><span>投票列表</span></strong></li>
<li><span>下方 footer 顯示</span><strong><span>頁尾版權</span></strong></li>
</ul><h2 id="投票列表（未登入）" data-id="投票列表（未登入）"><span>投票列表（未登入）</span></h2><ul>
<li><span>有</span><strong><span>搜尋匡</span></strong><span>可以用關鍵字搜尋投票主題</span></li>
<li><strong><span>分類選單</span></strong><span>，裡面有各種類別可以進行篩選想要找的類別主題</span></li>
<li></li>
<li><span>下面的 table</span></li>
<li></li>
<li><strong><span>類別</span></strong></li>
<li><strong><span>投票主題</span></strong></li>
<li><strong><span>單複選題</span></strong><span>，可以排序</span></li>
<li><strong><span>投票期間</span></strong><span>，顯示投票起迄日期以及時間，可以排序</span></li>
<li><strong><span>剩餘時間</span></strong><span>，顯示剩餘天數、小時、分鐘、秒，如果</span><strong><span>顯示剩餘時間</span></strong><span>，代表還可以投票，如果顯示</span><strong><span>暫時關閉</span></strong><span>，表示</span><strong><span>被管理員暫時關閉</span></strong><span>，縱使時間還沒截止，還是不能投票，</span><strong><span>投票已結束</span></strong><span>代表時間已截止，已不能投票，可以排序</span></li>
<li><strong><span>總投票人數</span></strong></li>
<li><span>超過十筆，將以</span><strong><span>分頁呈現</span></strong></li>
<li><strong><span>hover</span></strong><span>上去有</span><strong><span>變色</span></strong><span>以及</span><strong><span>放大</span></strong><span>的效果</span></li>
<li><span>點擊投票主題</span><strong><span>可以查看結果但不能投票</span></strong><span>，顯示</span><strong><span>登入按鈕</span></strong><span>，登入後即可投票</span></li>
</ul><h2 id="投票列表（已登入）" data-id="投票列表（已登入）"><span>投票列表（已登入）</span></h2><p><span>呈上部分</span></p><ul>
<li><strong><span>顯示已投過跟未投過的區別</span></strong><span>，</span><strong><span>已投過的主題</span></strong><span>背景會變淺藍，hover 也沒效果，反之</span><strong><span>未投過的主題</span></strong><span>，背景不變，hover 變粉紅、放大</span></li>
</ul><h2 id="登入頁面" data-id="登入頁面"><span>登入頁面</span></h2><ul>
<li><strong><span>帳號、密碼、驗證碼輸入頁面</span></strong></li>
<li><strong><span>帳號、密碼驗證</span></strong></li>
<li><strong><span>加入驗證碼驗證</span></strong><span>，如有看不清的情形，可以按重新產生驗證碼的按鈕</span></li>
<li><span>下方有</span><strong><span>尚未註冊</span></strong><span>、</span><strong><span>忘記密碼</span></strong><span>的連結</span></li>
</ul><h2 id="會員註冊" data-id="會員註冊"><span>會員註冊</span></h2><ul>
<li><strong><span>帳號</span></strong></li>
<li><strong><span>密碼</span></strong></li>
<li><strong><span>再次輸入密碼</span></strong></li>
<li><strong><span>名字</span></strong></li>
<li><strong><span>生日</span></strong></li>
<li><strong><span>電子郵件</span></strong></li>
<li><span>如果有</span><strong><span>相同的帳號</span></strong><span>註冊過，將</span><strong><span>不能再註冊</span></strong></li>
<li><strong><span>密碼格式限制</span></strong><span>：密碼須包含</span><strong><span>大寫、小寫、數字，且長度須介於 8~16，且以 md5 編碼儲存</span></strong></li>
<li><span>overflow 的話，scroll</span></li>
</ul><h2 id="忘記密碼" data-id="忘記密碼"><span>忘記密碼</span></h2><ul>
<li><span>輸入忘記密碼的</span><strong><span>帳號</span></strong></li>
<li><span>輸入註冊時的</span><strong><span>電子郵件</span></strong></li>
<li><span>如果成功驗證的話需</span><strong><span>輸入符合格式的密碼兩次</span></strong><span>才能重設密碼</span></li>
<li><strong><span>重設成功後，導回登入頁面</span></strong></li>
</ul><h2 id="會員中心" data-id="會員中心"><span>會員中心</span></h2><ul>
<li><strong><span>帳號</span></strong></li>
<li><strong><span>密碼</span></strong><span>，不顯示，但提供</span><strong><span>修改密碼</span></strong><span>的功能，</span><strong><span>修改密碼</span></strong><span>需要輸入</span><strong><span>舊密碼驗證</span></strong><span>，再輸入兩次符合和格式的</span><strong><span>新密碼</span></strong></li>
<li><strong><span>姓名</span></strong></li>
<li><strong><span>生日</span></strong></li>
<li><strong><span>電子郵件</span></strong></li>
<li><strong><span>等級</span></strong><span>，如果是一般會員，顯示</span><strong><span>一般會員</span></strong><span>，如果是管理員，則顯示</span><strong><span>管理員</span></strong></li>
<li><span>下方有</span><strong><span>編輯</span></strong><span>的按鈕，進入</span><strong><span>編輯會員的頁面</span></strong><span>，</span><strong><span>帳號是不能被更動的</span></strong><span>，密碼則是需要在會員中心進行</span><strong><span>修改密碼</span></strong><span>的動作，其餘的項目均可自行修改後送出</span></li>
<li><strong><span>刪除會員</span></strong><span>的功能，按下去將刪除對應的會員資料，</span><strong><span>只顯示在一般會員，管理員帳號不顯示</span></strong></li>
</ul><h2 id="投票結果頁面（記名投票）" data-id="投票結果頁面（記名投票）"><span>投票結果頁面（記名投票）</span></h2><ul>
<li><span>最上方</span><strong><span>顯示投票主題、記名投票</span></strong></li>
<li><span>顯示</span><strong><span>總投票數</span></strong></li>
<li><strong><span>顯示已投過這個主題的帳號</span></strong></li>
<li><strong><span>顯示各個選項有哪些使用者投過票</span></strong></li>
<li><strong><span>顯示各個選項的名稱、投票數、比例（以長條圖顯示）</span></strong></li>
<li><strong><span>如果當前帳號對這個主題還沒投過票，則可以投票，反之則顯示您已投過票，並有重新投票的按鈕可以重新投票，重新投票將影響三張資料表，按下去將會還原成原來還沒投票的狀態</span></strong></li>
<li><strong><span>加入年齡限制</span></strong></li>
</ul><h2 id="投票結果頁面（不記名投票）" data-id="投票結果頁面（不記名投票）"><span>投票結果頁面（不記名投票）</span></h2><ul>
<li><strong><span>不顯示</span></strong><span>已投過的帳號</span></li>
<li><strong><span>不顯示</span></strong><span>各個選項有哪些使用者投過票</span></li>
<li><span>其他功能跟記名投票一樣</span></li>
</ul><h2 id="新增投票（管理員）" data-id="新增投票（管理員）"><span>新增投票（管理員）</span></h2><ul>
<li><strong><span>類別</span></strong><span>，選擇想要的類別</span></li>
<li><strong><span>投票主題</span></strong></li>
<li><strong><span>開始日期</span></strong></li>
<li><strong><span>開始時間</span></strong></li>
<li><strong><span>結束日期</span></strong></li>
<li><strong><span>結束時間</span></strong></li>
<li><strong><span>年齡上限</span></strong></li>
<li><strong><span>年齡下限</span></strong></li>
<li><strong><span>單選或複選</span></strong></li>
<li><strong><span>選項</span></strong><span>，可以新增選項</span></li>
<li><strong><span>新增按鈕</span></strong><span>送出</span></li>
</ul><h2 id="編輯投票（管理員）" data-id="編輯投票（管理員）"><span>編輯投票（管理員）</span></h2><ul>
<li><strong><span>類別</span></strong><span>，選擇想要的類別</span></li>
<li><strong><span>投票主題</span></strong></li>
<li><strong><span>開始日期</span></strong></li>
<li><strong><span>開始時間</span></strong></li>
<li><strong><span>結束日期</span></strong></li>
<li><strong><span>結束時間</span></strong></li>
<li><strong><span>年齡上限</span></strong></li>
<li><strong><span>年齡下限</span></strong></li>
<li><strong><span>單選或複選</span></strong></li>
<li><strong><span>選項</span></strong><span>，可以新增選項</span></li>
<li><strong><span>選項可以刪除選項</span></strong></li>
<li><strong><span>編輯按鈕</span></strong><span>送出</span></li>
</ul><h2 id="分類管理（管理員）" data-id="分類管理（管理員）"><span>分類管理（管理員）</span></h2><ul>
<li><span>可以</span><strong><span>新增類別</span></strong></li>
<li><strong><span>顯示所有類別</span></strong></li>
<li><strong><span>避免新增有相同名稱的類別</span></strong></li>
<li><strong><span>可以刪除類別</span></strong></li>
<li><strong><span>不能刪除已經在投票列表裡的類別</span></strong></li>
</ul><h2 id="投票管理中心（管理員）" data-id="投票管理中心（管理員）"><span>投票管理中心（管理員）</span></h2><ul>
<li><span>有</span><strong><span>搜尋匡</span></strong><span>可以利用關鍵字查詢投票主題</span></li>
<li><span>左上有</span><strong><span>新增投票</span></strong><span>的按鈕</span></li>
<li><strong><span>分類選單</span></strong><span>，裡面有各種類別可以進行篩選想要找的類別主題</span></li>
<li></li>
<li><span>下面的 table</span></li>
<li></li>
<li><strong><span>類別</span></strong></li>
<li><strong><span>投票主題</span></strong></li>
<li><strong><span>單複選題</span></strong><span>，可以排序</span></li>
<li><strong><span>投票期間</span></strong><span>，顯示投票起迄日期以及時間，可以排序</span></li>
<li><strong><span>剩餘時間</span></strong><span>，顯示剩餘天數、小時、分鐘、秒，如果顯示剩餘時間，代表還可以投票，如果顯示</span><strong><span>暫時關閉</span></strong><span>，表示被管理員暫時關閉，縱使時間還沒截止，還是不能投票，投票已結束代表時間已截止，已不能投票，可以排序</span></li>
<li><strong><span>總投票人數</span></strong></li>
<li><span>超過十筆，將以</span><strong><span>分頁呈現</span></strong></li>
<li><strong><span>hover 上去有變色以及放大的效果</span></strong></li>
<li><strong><span>操作（編輯、刪除、開關、記名）</span></strong></li>
<li><strong><span>編輯</span></strong><span>，編輯投票的各項資訊</span></li>
<li><strong><span>刪除</span></strong><span>，刪除指定的投票主題</span></li>
<li><strong><span>開關</span></strong><span>，</span><strong><span>一鍵開啟或關閉投票主題</span></strong><span>，不管日期是否截止都有效，</span><strong><span>暫時關閉的主題顯示淡灰色以利辨認</span></strong></li>
<li><strong><span>記名</span></strong><span>，控制投票主題是否記名，</span><strong><span>記名投票的主題，按鈕會變橘色以利辨認</span></strong></li>
</ul><h2 id="會員列表（管理員）" data-id="會員列表（管理員）"><span>會員列表（管理員）</span></h2><ul>
<li><strong><span>ID</span></strong></li>
<li><strong><span>Account</span></strong></li>
<li><strong><span>Name</span></strong></li>
<li><strong><span>Birthday</span></strong></li>
<li><strong><span>Address</span></strong></li>
<li><strong><span>E-mail</span></strong></li>
<li><strong><span>會員等級</span></strong><span>：一般會員或是管理員</span></li>
<li><strong><span>刪除使用者</span></strong><span>：一般會員被可以刪除，管理員可以調降</span><strong><span>其他管理員</span></strong><span>帳號，變成一般會員後才能刪除其帳號，</span><strong><span>管理員自己不能刪除</span></strong></li>
<li><strong><span>權限調整</span></strong><span>：</span><strong><span>一般會員</span></strong><span>可以被</span><strong><span>提高等級</span></strong><span>，</span><strong><span>管理員可以調降其他管理員帳號</span></strong><span>，變成一般會員，</span><strong><span>管理員自己不能調權限</span></strong></li>
<li><span>如果是</span><strong><span>管理員</span></strong><span>帳號將會顯示</span><strong><span>土黃色背景色</span></strong><span>以利辨認</span></li>
</ul><h2 id="新增投票主題類別（管理員）" data-id="新增投票主題類別（管理員）"><span>新增投票主題類別（管理員）</span></h2><ul>
<li><strong><span>可以新增類別</span></strong></li>
<li><strong><span>避免新增同樣名稱的類別</span></strong></li>
</ul><h1 id="資料表設計---資料庫名稱：s1110222" data-id="資料表設計---資料庫名稱：s1110222"><span>資料表設計 - 資料庫名稱：s1110222</span></h1><ul>
<li>
<p><span>users</span></p>
<table>
<thead>
<tr>
<th><span>名稱</span></th>
<th><span>型態</span></th>
<th><span>預設值</span></th>
<th><span>A_I</span></th>
<th><span>備註</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span>id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>true</span></td>
<td><span>序號</span></td>
</tr>
<tr>
<td><span>acc</span></td>
<td><span>varchar(12)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>帳號</span></td>
</tr>
<tr>
<td><span>pw</span></td>
<td><span>varchar(32)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>密碼</span></td>
</tr>
<tr>
<td><span>name</span></td>
<td><span>varchar(12)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>名稱</span></td>
</tr>
<tr>
<td><span>birthday</span></td>
<td><span>date</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>生日</span></td>
</tr>
<tr>
<td><span>email</span></td>
<td><span>varchar(36)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>email</span></td>
</tr>
<tr>
<td><span>admin</span></td>
<td><span>int(1)</span></td>
<td><span>0</span></td>
<td><span>–</span></td>
<td><span>區分是否是管理者</span></td>
</tr>
</tbody>
</table>
</li>
<li>
<p><span>subjects</span></p>
<table>
<thead>
<tr>
<th><span>名稱</span></th>
<th><span>型態</span></th>
<th><span>預設值</span></th>
<th><span>A_I</span></th>
<th><span>備註</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span>id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>true</span></td>
<td><span>序號</span></td>
</tr>
<tr>
<td><span>subject</span></td>
<td><span>varchar(128)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>主題描述</span></td>
</tr>
<tr>
<td><span>type_id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>主題類別</span></td>
</tr>
<tr>
<td><span>multiple</span></td>
<td><span>boolean(1)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>單/複選</span></td>
</tr>
<tr>
<td><span>mulit_limit</span></td>
<td><span>tinyint(2)</span></td>
<td><span>1</span></td>
<td><span>–</span></td>
<td><span>單/複選項目數</span></td>
</tr>
<tr>
<td><span>start</span></td>
<td><span>date</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>開始時間</span></td>
</tr>
<tr>
<td><span>starttime</span></td>
<td><span>date</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>開始時間</span></td>
</tr>
<tr>
<td><span>end</span></td>
<td><span>date</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>結束時間</span></td>
</tr>
<tr>
<td><span>endtime</span></td>
<td><span>date</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>結束時間</span></td>
</tr>
<tr>
<td><span>total</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>投票人數統計</span></td>
</tr>
<tr>
<td><span>switch</span></td>
<td><span>int(1)</span></td>
<td><span>1</span></td>
<td><span>–</span></td>
<td><span>投票主題開關</span></td>
</tr>
<tr>
<td><span>secret</span></td>
<td><span>int(1)</span></td>
<td><span>0</span></td>
<td><span>–</span></td>
<td><span>記名投票與不記名投票</span></td>
</tr>
<tr>
<td><span>age_limit</span></td>
<td><span>int(3)</span></td>
<td><span>18</span></td>
<td><span>–</span></td>
<td><span>年齡下限</span></td>
</tr>
<tr>
<td><span>age_limit_below</span></td>
<td><span>int(3)</span></td>
<td><span>120</span></td>
<td><span>–</span></td>
<td><span>年齡上限</span></td>
</tr>
</tbody>
</table>
</li>
<li>
<p><span>options</span></p>
<table>
<thead>
<tr>
<th><span>名稱</span></th>
<th><span>型態</span></th>
<th><span>預設值</span></th>
<th><span>A_I</span></th>
<th><span>備註</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span>id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>true</span></td>
<td><span>序號</span></td>
</tr>
<tr>
<td><span>option</span></td>
<td><span>varchar(128)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>選項描述</span></td>
</tr>
<tr>
<td><span>subject_id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>主題</span></td>
</tr>
<tr>
<td><span>total</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>投票人數統計</span></td>
</tr>
</tbody>
</table>
</li>
<li>
<p><span>log</span></p>
<table>
<thead>
<tr>
<th><span>名稱</span></th>
<th><span>型態</span></th>
<th><span>預設值</span></th>
<th><span>A_I</span></th>
<th><span>備註</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span>id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>true</span></td>
<td><span>序號</span></td>
</tr>
<tr>
<td><span>user_id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>投票者</span></td>
</tr>
<tr>
<td><span>sujbect_id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>投票項目</span></td>
</tr>
<tr>
<td><span>option_id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>選項</span></td>
</tr>
<tr>
<td><span>vote_time</span></td>
<td><span>timestamp</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>投票時間</span></td>
</tr>
</tbody>
</table>
</li>
<li>
<p><span>type</span></p>
<table>
<thead>
<tr>
<th><span>名稱</span></th>
<th><span>型態</span></th>
<th><span>預設值</span></th>
<th><span>A_I</span></th>
<th><span>備註</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span>id</span></td>
<td><span>int(11)</span></td>
<td><span>–</span></td>
<td><span>true</span></td>
<td><span>序號</span></td>
</tr>
<tr>
<td><span>name</span></td>
<td><span>varchar(128)</span></td>
<td><span>–</span></td>
<td><span>–</span></td>
<td><span>分類名稱</span></td>
</tr>
</tbody>
</table>
</li>
</ul></div>`;