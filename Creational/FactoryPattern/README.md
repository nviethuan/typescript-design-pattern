# Factory Pattern

##################################################################################################

![Factory Pattern](https://bitbucket.org/nviethuan/typescript-design-pattern/raw/92e4004ce64fdba9ed21bdde6b5274a1608c8d5b/Creational/FactoryPattern/1cf103c5-5c71-417d-952a-74c1c91df9b9.png "Factory Pattern")

##################################################################################################

Ở hình trên ta có thể thấy có 3 Class **Honda**, **Nexus** và **Toyota** đều được implements từ Class **Car**. Cả 3 class này đều là con của class **Car** nên nó thừa hưởng tất cả các tính chất của Car và phải override lại phương thức **view()** của **Car**. Tuy nó có chung phương thức nhưng chúng ta có thể định nghĩa khác nhau cho nó. Hiểu đơn giản là bạn đến cửa hàng **Honda** để bạn xem xe của hãng **Honda** chứ không phải xem của **Nexus** hay **Toyota**. Và 2 cửa hàng kia cũng vậy. Cho nên Chúng ta phải viết nội dung của phương thức **view()** khác nhau cho từng Class con.

#### ***Factory Pattern*** *cho phép chúng ta tạo ra một địa điểm tập trung tất cả các đối tượng đã được tạo ra*

***Factory Pattern*** đưa ra 1 ý tưởng mới cho việc khởi tạo các instance phù hợp với mỗi request từ phía Client. Sử dụng Factory pattern sẽ có những ưu điểm sau:

* Tạo ra 1 cách mới trong việc khởi tạo cá Object thông qua 1 interface chung.
* Khởi tạo các Objects mà che giấu đi xử lí logic của việc khởi tạo đấy.
* Giảm sự phụ thuộc giữa các module, các logic với các class cụ thể, mà chỉ phụ thuộc vào interface hoặc abstract class.