<h1>hello</h1>
<button onclick="del()">click me</button>
<script>
    function del() {
        $.post("./delete_data.php")
    }
</script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>