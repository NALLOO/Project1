import React from 'react';
import './Question.css';

function Question() {
    return (
        <div className="question-content">
            <div className="row justify-content-center">
                <div className="col-md-10 question-items">
                    <p>
                        <i class="fas fa-question-circle"></i>
                        CÂU HỎI THƯỜNG GẶP</p>
                    <ol>
                        <li className="question-item">
                            <span>Tôi chưa đăng ký làm người dùng của hệ thống. Tôi có thể kiểm tra tài liệu không?</span>
                            <div>
                                Nếu bạn chưa đăng nhập vào hệ thống, bạn vẫn có thể kiểm tra tài liệu ở Trang chủ. Tuy nhiên, bạn chỉ có thể nhìn kết quả kiểm trùng trên giao diện web mà không có file kết quả kiểm trùng.
                            </div>
                        </li>
                        <li className="question-item">
                            <span>Khi đăng nhập hệ thống, tôi có quyền lợi gì hơn khi không đăng nhập?</span>
                            <div>Khi đăng nhập hệ thống, bạn sẽ có thư mục lưu các tài liệu đã kiểm tra. Ngoài ra, khi kiểm tra các tài liệu, bạn sẽ có 3 dạng kết quả trả về, bao gồm: (i) Giao diện web hiển thị kết quả kiểm trùng; (ii) file báo cáo tổng hợp kết quả kiểm trùng; (iii) file tài liệu gốc đã được đánh dấu các đoạn sao chép</div>
                        </li>
                        <li className="question-item">
                            <span>Làm thế nào để đăng ký làm người dùng của hệ thống?
                            </span>
                            <div>
                                Bạn có thể sử dụng chức năng Đăng ký trên hệ thống. Sau khi đăng ký, hệ thống sẽ yêu cầu bạn xác nhận email đăng ký. Sau khi nhận được email thông báo người quản trị hệ thống đã phê duyệt tài khoản của bạn, bạn có thể Đăng nhập vào hệ thống. Ngoài ra, nếu trường của bạn đã tham gia vào là một đối tác của hệ thống, trường bạn sẽ cấp tài khoản cho bạn.
                            </div>
                        </li>
                        <li className="question-item">
                            <span>Tên đăng nhập hệ thống là gì?</span>
                            <div>Tên đăng nhập là email đăng ký của bạn.</div>
                        </li>
                        <li className="question-item">
                            <span>Tôi có thể kiểm tra các tài liệu ở định dạng gì?</span>
                            <div>Tài liệu cần kiểm tra khuyến cáo ở dạng pdf có thể chuyển sang dạng txt. Hệ thống cũng có thể kiểm tra file doc, docx nhưng chỉ sinh ra file báo cáo tổng hợp cho người dùng đã đăng nhập hệ thống.</div>
                        </li>
                        <li className="question-item">
                            <span>Khi nhập thông tin kiểm tra tài liệu ở Trang chủ, tại sao lại có mục điền từ khóa và Sinh từ khóa tự động?</span>
                            <div>Bạn có thể điền từ khóa đại diện cho tài liệu. Nếu không, hệ thống sẽ tự động sinh từ khóa đại diện cho tài liệu của bạn. Khi đó bạn phải chọn Sinh từ khóa tự động. Hệ thống bắt buộc phải có từ khóa theo một trong hai cách này để có thể kiểm trùng tài liệu.</div>
                        </li>

                        <li className="question-item">
                            <span>Trên trang web hiển thị kết quả kiểm trùng, tài liệu nội bộ, tài liệu nội bộ trường khác, Internet là gì?</span>
                            <div>Tài liệu nội bộ là tài liệu nội bộ thuộc trường của người dùng. Tài liệu nội bộ trường khác là tài liệu nội bộ thuộc các trường không phải trường của người dùng. Internet là các tài liệu có thể truy cập trực tiếp từ Internet.
                            </div>
                            <li className="question-item">
                                <span>Hệ thống trả về kết quả trong bao lâu?</span>
                                <div>Thời gian trả kết quả phụ thuộc vào độ dài của tài liệu kiểm tra. Thường với một tài liệu dạng Đồ án tốt nghiệp dài khoảng 50-60 trang, hệ thống trả về kết quả sau 2-3 phút. Tuy nhiên, khi nhiều người cùng tiến hành kiểm tra, hệ thống chạy chậm hơn. Bạn hãy kiểm tra hộp thư đăng ký để nhận kết quả.</div>
                            </li>
                            <li className="question-item">
                                <span>Tại sao file tôi tải lên để kiểm tra mãi không trả về kết quả?</span>
                                <div>Có thể file của bạn không đúng định dạng quy ước. Bạn hãy kiểm tra điều kiện đối với file đầu vào trước khi tải file. Nếu file của bạn không thỏa mãn điều kiện (ví dụ bạn nạp file có nội dung là tiếng Việt không dấu, file không chuyển đổi được sang dạng txt, hoặc tiếng Anh), hãy chuyển file về đúng định dạng trước khi kiểm tra. Cũng có thể do địa chỉ email bạn cung cấp không đúng hoặc không có khả năng nhận mail, hãy sử dụng một địa chỉ email khác để nhận kết quả.</div>
                            </li>
                            <li className="question-item">
                                <span>Kho tài liệu của hệ thống lấy ở đâu?</span>
                                <div>Tài liệu trong hệ thống được thu thập tài liệu từ các trường đối tác và các nguồn tài liệu trên Internet. Do vấn đề bản quyền, các nguồn tài liệu nội bộ của các trường đối tác chỉ dùng để kiểm tra, không dùng cho mục đích khác, không được đưa công khai toàn bộ nội dung lên Internet.</div>
                            </li>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Question;