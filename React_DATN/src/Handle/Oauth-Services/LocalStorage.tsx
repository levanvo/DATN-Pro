export function setLocalStorage(key:any,content:any){
    localStorage.setItem(key,JSON.stringify(content));
};

export function getLocalStorage(key:any){
    const data = localStorage.getItem('shoes.dataUser');
    if (data !== null) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.error('Lỗi chạy JSON:', error);
        };
    } else {
        console.log('Không có dữ liệu với khóa "key" trong localStorage.');
    };
};