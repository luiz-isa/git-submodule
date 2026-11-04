
export const formatDate = 'dd/MM/yyyy';

export default function getFormatDate(date: Date){
    const day = String(date.getDate()).padStart(2, '0');
    const mon = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    
    const formatedDate = `${day}/${mon}/${year}`;
    return formatedDate; // Exemplo: 29/05/2024    
}
