import { ElMessageBox, ElMessage } from 'element-plus'

const deleteConfirm = function (
    message = "",
    thenable = () => { }
) {
    ElMessageBox.confirm(
        message,
        '操作确认',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(thenable)
        .catch(() => {})
}

const alertSuccess = function (
    message = "",
) {
    ElMessage({
        message: message,
        type: 'success',
        duration: 2000,
    })
}

const alertError = function (
    message = "",
) {
    ElMessage({
        message: message,
        type: 'error',
        duration: 2000,
    })
} 


export {
    deleteConfirm,
    alertSuccess,
    alertError,
}