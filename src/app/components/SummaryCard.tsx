

const bn = (num: number, digits = 0) =>
    Number(num).toLocaleString("bn-BD", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });

const SummaryCard = ({
    label,
    value,
    valueClass,
    note,
}: {
    label: string,
    value: number,
    valueClass: string,
    note: string,
}) => {
    return (
         <div className="rounded-xl border p-4">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="mt-1">
                <span className={`text-2xl font-bold ${valueClass}`}>{bn(value)}</span>{" "}
                <span className={`text-sm ${valueClass}`}>টাকা</span>
            </p>
            <p className="mt-1 text-[11px] text-gray-500">{note}</p>
        </div>
    );
};

export default SummaryCard;