import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';

function Toasts() {
    const toasts = useStoreState(store => store.user.getToasts());
    if (toasts) { }
    return toasts ? (
        <div id="toast-container">
            {toasts.map(toast => (<Toast toast={toast} key={toast.key}/>)) }
        </div>
    ) : (null)
}


const Toast = (toast) => {
    toast = toast.toast;
    if (toast.new) {
        useStoreActions(store => store.user.toastReading(toast.key));
    }
    return toast.reading ? (
        <div className="toast rounded" >
            {toast.text}
        </div>
    ) : (null)
}

export default Toasts
