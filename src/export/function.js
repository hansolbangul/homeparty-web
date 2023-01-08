export const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
};