import React, { useEffect, useState } from 'react';

import './Document.css'


function Document() {

    const [listDocument, setListDocument] = useState({});
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        async function fetchList() {
            const URL = 'https://project1-addf0-default-rtdb.firebaseio.com/document.json'
            const response = await fetch(URL);
            const responseJSON = await response.json();
            setListDocument(responseJSON);
            console.log(responseJSON);
            setKeys(Object.keys(responseJSON))
        }
        fetchList()
    }, [])

    return (
        <div style={{
            margin: "0 158px",
            minHeight: "436px"
        }}>
            <p className="pt-5" style={{
                fontSize: "18px",
                marginBottom: "30px"
            }}> <i className="fas fa-file-alt" style={{ color: "#3490dc" }}></i> &nbsp;TÀI LIỆU CỦA TÔI </p>

            <table id="document-table" class="table " style={{ width: "100%" }}>
                <thead className="text-center">
                    <tr>
                        <th><input type="checkbox" name="select_all" id="select_all" value="all" /></th>
                        <th> STT </th>
                        <th> Tên tài liệu </th>
                        <th> Mức độ trùng lặp </th>
                        <th> Ngày tải </th>
                        <th> Trạng thái </th>
                        <th> Báo cáo tổng hợp </th>
                        <th> Báo cáo đã kiểm tra </th>
                        <th> Hành động </th>
                    </tr>
                </thead>
                {keys.map(key => (
                    <tr key={listDocument[key].stt}
                        style={{
                            height: "45px"
                        }}>
                        <td style={{ textAlign: "center" }}>
                            <input type="checkbox" name="delete-item" class="delete-check" id="delete-check-0" value="450" />
                        </td>
                        <td style={{ textAlign: "center" }}> {listDocument[key].stt} </td>
                        <td width="15%" style={{ textAlign: "center" }}>
                            <a target={'_blank'} href={`https://view-pdf-cae03.web.app/${listDocument[key].url}`}> {listDocument[key].name} </a> </td>
                        <td style={{ textAlign: "center" }}>
                            {`${listDocument[key].percent}%`}
                        </td>
                        <td style={{ textAlign: "center" }}> {listDocument[key].date} </td>
                        <td style={{ textAlign: "center" }}> {listDocument[key].status}</td>
                        <td style={{ textAlign: "center" }}>
                            <a href={listDocument[key].report1} target="_blank" > {`${listDocument[key].report1.slice(0, 20)}...`} </a> </td>
                        <td style={{ textAlign: "center" }}>
                            <a href={listDocument[key].report2} target="_blank"> {`${listDocument[key].report2.slice(0, 20)}...`}</a>
                        </td>
                        <td width="8%" style={{ textAlign: "center" }}>
                            <a href="#" data-toggle="modal" data-target="#delete-modal-0">
                                <i class="fas fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>))
                }

            </table >
        </div >


    );
}

export default Document;