# todolist-react
Created with CodeSandbox
disini saya menggunakan CodeSandbox karena menggunakan browser dan juga ringan di laptop saya yang kentang ini.
bisa kunjungi : https://codesandbox.io/s/relaxed-stallman-3gccr?file=/src/App.js
untuk melihat lebih detail dari aplikasi yang saya kerjakan.

dalam Project ini pertama saya membuat dengan Pure HTML dan CSS, lalu kemudian mengubah dari HTML ke REACT.
lalu menambahkan fitur pada aplikasi tersebut mulai dari : 
1. Maksimal 40 karakter.
2. Maksimal 10 List.
3. Menampilkan inputForm jika menekan Button Add , dipojok kiri atas.
4. Delete Data.
5. Button "Clear" tidak bisa di klik apabila terdapat button "Finish".
6. Update data pada aplikasi ini yaitu mencoret list jika di klik ataupun sebaliknya.
6. About Page. yang mana disini tanpa rerfresh page sebelumnya, hanya mengubah konten pada page tersebut.
7. localStorage.


setelah itu , saya mengubah format Styling aplikasi tersebut menggunakan CSS module react.
kemudian dilanjutkan dengan migrasi ke full react pada component, dan mencoba no JSX.

Sebelumnya saya mencoba localStorage namun terjadi global error yaitu cross-origin error, yang mana dalam waktu save data di localStorage, data tidak jelas sudah ada di localStorage yang mana codesandbox tidak bisa menimpa data yang tidak jelas tersebut dan mengakibatkan global error.

untuk menyambungkan ke firebase mungkin butuh waktu untuk mempelajarinya.
