import React from 'react';


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
                    <form action="http://coopy.soict.ai/old/check-document" method="POST" enctype="multipart/form-data" id="documents-form">
                        <div class="row my-4">
                            <div class="col-md-3">
                                <label class="col-form-label required float-right"> Chọn chức năng </label>
                            </div>
                            <div class="col-md-7">
                                <select class="user_status custom-select" name="type" id="type">
                                    <option value="vi-vi"> Kiểm tra trùng lặp Việt-Việt </option>
                                    <option value="vi-en"> Kiểm tra trùng lặp Việt-Anh </option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-4 mb-2">
                            <div class="col-md-3">
                                <label class="col-form-label required float-right"> Tài liệu cần kiểm tra </label>
                            </div>
                            <div class="col-md-7">
                                <input type="text" name="file_name" id="file_name" class="form-control" placeholder="Tài liệu cần kiểm tra" readonly="" />
                                <div id="file_name_error" class="invalid-feedback"></div>
                                <div class="mt-2" style={{ color: "red", fontSize: "10px " }}>* Nội dung file cần kiểm tra là văn bản tiếng Việt có dấu, file có đuôi là pdf.</div>
                            </div>
                        </div>
                        <div class="col-md-7 row offset-3">
                            <input type="file" id="file_computer" name="file_computer" accept="application/pdf" class="d-none" />
                            <a href="javascript:" class="btn btn-outline-primary pull-right mb-xl fileinput-new" id="btn-browse" data-trigger="fileinput" onclick="thisFileUpload();">
                                <i class="fas fa-tv"></i> Máy tính
                            </a>
                            <button type="button" class="btn btn-outline-primary pull-right mb-xl fileinput-new ml-2" onclick="onApiLoad()">
                                <i className="fab fa-google-drive"></i> Google driver
                            </button>
                        </div>
                        <div className="email_gevent row my-4">
                            <div class="col-md-3">
                                <label class="col-form-label float-right" for="studentName"> Tên tác giả </label>
                            </div>
                            <div class="col-md-7">
                                <input type="text" name="studentName" id="studentName" class="form-control" placeholder="Tên tác giả" value="" />
                            </div>
                        </div>
                        <div class="email_gevent row my-4">
                            <div class="col-md-3">
                                <label class="col-form-label required float-right"> Email nhận kết quả </label>
                            </div>
                            <div class="col-md-7">
                                <input type="email" name="email" id="email" class="form-control" placeholder="Email nhận kết quả" value="" />
                                <div id="email_error" class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div class="row my-4">
                            <div class="col-md-3">
                                <label class="col-form-label required float-right"> Chọn trường học </label>
                            </div>
                            <div class="col-md-7">
                                <select class="user_status custom-select select2-hidden-accessible" name="universityId" id="universityId" data-select2-id="universityId" tabindex="-1" aria-hidden="true">
                                    <option value="0" selected="" disabled="" data-select2-id="2"> ----Chọn trường </option>
                                    <option value="1"> Trường Đại học Bách khoa Hà Nội </option>
                                    <option value="2"> Trường Đại học Xây Dựng </option>
                                    <option value="3"> Trường Đại học Kinh tế Quốc dân </option>
                                </select>

                            </div>
                        </div>
                        <div class="email_gevent row my-4">
                            <div class="col-md-3">
                                <label class="col-form-label float-right" for="title"> Tên tài liệu </label>
                            </div>
                            <div class="col-md-7">
                                <input type="text" name="title" id="title" class="form-control" placeholder="Tên tài liệu" />
                            </div>
                        </div>
                        <div class="keyword_gevent row my-4">
                            <div class="col-md-3 text-right">
                                <label class="mb-0">
                                    Từ khóa
                                </label>
                                <div >viết cách nhau bởi dấu phẩy</div>
                            </div>
                            <div class="col-md-7">
                                <input type="text" name="givenKeywords" id="keyword" class="form-control" placeholder="Keyword,Keyword" value="" />
                                <div id="keyword_error" class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div class="keyword_extract_gevent row my-4">
                            <div class="col-md-3">
                                <label class="float-right">Sinh từ khóa tự động</label>
                            </div>
                            <div class="col-md-3">
                                <input type="checkbox" name="extractDocumentKeywords" id="keyword_extract" value="true" checked="" />
                                <div id="keyword_error" class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div class="keyword_extract_gevent row my-4">
                            <div class="col-md-3">
                                <label class="float-right">Kiểm tra tài liệu tham khảo</label>
                            </div>
                            <div class="col-md-3">
                                <input type="checkbox" name="checkReferences" id="checkReferences" value="true" checked="" />
                                <div id="check_references_error" class="invalid-feedback"></div>
                            </div>
                        </div>
                        <div class="email_gevent row mt-2">
                            <div class="col-md-3"></div>
                            <div class="col-md-7">
                                <button type="button" class="btn btn-primary" id="btn-submit-form"> Kiểm tra </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
}

export default Home;