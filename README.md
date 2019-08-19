/**
  * Fabric Store
  * @gmail elfinsanjaya12@gmail.com
  * @kontak 08154023099
  * @author Elfin Sanjaya 
*/


## Daftar Isi

* [Daftar Isi](#daftar-isi)
* [Daftar API](#daftar-api)
  * [Customer](#customer)
  * [Users](#users)
  
## Daftar API
### Customer

| Nama Routes                                          | HTTP   | Deskripsi                                      | Dibuat | Hasil Test | Middleware `Auth` |
| :--------------------------------------------------- | :----- | :--------------------------------------------- | :----- | :--------- | :---------------- |
| `/api/v1/customer/register`                                     | POST    | create register customer                                | Sudah  | OK         | Tidak             |
| `/api/v1/customer/signin`                                     | POST    | signin customer                                | Sudah  | OK         | Tidak             |
| `/api/v1/product`                                     | GET    | read all products                                | Sudah  | OK         | Ya |


### Users

| Nama Routes                                          | HTTP   | Deskripsi                                      | Dibuat | Hasil Test | Middleware `Auth` |
| :--------------------------------------------------- | :----- | :--------------------------------------------- | :----- | :--------- | :---------------- |
| `/api/v1/users/signin`                                     | POST    | signin admin                                | Sudah  | OK         | Tidak |
| `/api/v1/product`                                     | GET    | read all products                                | Sudah  | OK         | Ya |
| `/api/v1/product`                                     | POST    | create product                                | Sudah  | OK         | Ya |
