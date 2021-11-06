import React from 'react';
import './Home.css'


function Home() {
    return (
        <section className="main-content">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p className="pt-5">HỆ THỐNG KIỂM TRA TRÙNG LẶP NỘI DUNG</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 offset-1">
                    <form method="POST" id="documents-form">
                        <div className="row my-4">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label required float-right"> Chọn chức năng </label>
                            </div>
                            <div className="col-md-7">
                                <select className="type" name="type" id="type">
                                    <option value="vi-vi"> Kiểm tra trùng lặp Việt-Việt </option>
                                    <option value="vi-en"> Kiểm tra trùng lặp Việt-Anh </option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4 mb-2">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label required float-right"> Tài liệu cần kiểm tra </label>
                            </div>
                            <div className="col-md-7">
                                <input type="text" name="file_name" id="file_name" class="form-control" placeholder="Tài liệu cần kiểm tra" readonly="" />
                                <div id="file_name_error" className="invalid-feedback"></div>
                                <div className="mt-2" style={{ color: "red", fontSize: "10px " }}>* Nội dung file cần kiểm tra là văn bản tiếng Việt có dấu, file có đuôi là pdf.</div>
                            </div>
                        </div>
                        <div className="col-md-7 row offset-3">
                            <input type="file" id="file_computer" name="file_computer" accept="application/pdf" className="d-none" />
                            <a href="javascript:" className="btn btn-outline-primary pull-right mb-xl fileinput-new" id="btn-browse" data-trigger="fileinput" onclick="thisFileUpload();">
                                <i className="fas fa-tv"></i> Máy tính
                            </a>
                            <button type="button" id="btn-browse" class="btn btn-outline-primary pull-right mb-xl fileinput-new ml-2" onclick="onApiLoad()">
                                <i className="fab fa-google-drive"></i> Google driver
                            </button>
                        </div>
                        <div className="email_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label float-right" for="studentName"> Tên tác giả </label>
                            </div>
                            <div className="col-md-7">
                                <input type="text" name="studentName" id="studentName" className="form-control" placeholder="Tên tác giả" value="" />
                            </div>
                        </div>
                        <div className="email_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label required float-right"> Email nhận kết quả </label>
                            </div>
                            <div className="col-md-7">
                                <input type="email" name="email" id="email" className="form-control" placeholder="Email nhận kết quả" value="" />
                                <div id="email_error" className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label required float-right"> Chọn trường học </label>
                            </div>
                            <div className="col-md-7">
                                <select className="form-control" name="school_id" id="school_id">
                                    <option value="0">Chọn Trường</option>
                                    <option value="1">Đại học Bách Khoa Hà Nội</option>
                                    <option value="2">Đại học Xây Dựng</option>
                                    <option value="3">Đại học Kinh tế Quốc dân</option>
                                </select>
                            </div>
                        </div>
                        <div className="email_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="col-form-label float-right" for="title"> Tên tài liệu </label>
                            </div>
                            <div className="col-md-7">
                                <input type="text" name="title" id="title" className="form-control" placeholder="Tên tài liệu" />
                            </div>
                        </div>
                        <div className="keyword_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="mb-0">
                                    Từ khóa
                                </label>
                                <div >viết cách nhau bởi dấu phẩy</div>
                            </div>
                            <div className="col-md-7">
                                <input type="text" name="givenKeywords" id="keyword" className="form-control" placeholder="Keyword,Keyword" value="" />
                                <div id="keyword_error" className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="keyword_extract_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="float-right">Sinh từ khóa tự động</label>
                            </div>
                            <div className="col-md-3 ">
                                <input type="checkbox" name="extractDocumentKeywords" id="keyword_extract" value="true" checked="" />
                                <div id="keyword_error" className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="keyword_extract_gevent row my-4">
                            <div className="col-md-3 form-label">
                                <label className="float-right">Kiểm tra tài liệu tham khảo</label>
                            </div>
                            <div className="col-md-3 ">
                                <input type="checkbox" name="checkReferences" id="checkReferences" value="true" checked="" />
                                <div id="check_references_error" className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="email_gevent row mt-2">
                            <div className="col-md-3 form-label"></div>
                            <div className="col-md-7">
                                <button type="button" className="btn btn-primary" id="btn-submit-form"> Kiểm tra </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default Home;