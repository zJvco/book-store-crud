import EditBookButton from "./Buttons/EditBookButton";
import RemoveBookButton from "./Buttons/RemoveBookButton";
import MoreInfoBookButton from "./Buttons/MoreInfoBookButton";

import "../styles/BooksTable.css";

function BooksTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>João Victor</td>
                    <td>Hello World Book of History</td>
                    <td>299.00</td>
                    <td>2022-10-02</td>
                    <td>2022-11-05</td>
                    <td>
                        <EditBookButton />
                        <RemoveBookButton />
                    </td>
                    <td>
                        <MoreInfoBookButton />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default BooksTable;