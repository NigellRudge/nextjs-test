import clsx from "clsx";

const InvoiceStatus = ({status}:{status:string})=>(
    <span className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
            'bg-gray-100 text-gray-500': status === 'pending',
            'bg-green-500 text-white': status === 'paid',
        },
    )}>
    </span>
)

export default InvoiceStatus;