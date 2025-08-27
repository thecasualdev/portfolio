
<svelte:head>
    <title>thecasaualdev + contact</title>
</svelte:head>

<h1>contact me here!</h1>

<form method="POST">

    <label>
        Name: <input type="text" name="name" required>
    </label>
    <label>
        Email: <input type="email" name="mail" required>
    </label>

    <label>
        Message: <textarea name="message" required></textarea>
    </label>

    <button type="submit">Submit</button>

</form>
