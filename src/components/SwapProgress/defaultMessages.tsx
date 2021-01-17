import type { Messages } from './component';

const values: { [k: string]: Messages } = {
  en: {
    WAITING: 'Waiting for your deposit…',
    PENDING: 'Transaction found.<br />Waiting for confirmations…',
    SIGNING: 'Signing your swap…',
    SENDING: 'Sending to your address…',
    COMPLETED: 'Swap completed!',
    SIGNING_REFUND: 'Signing your refund…',
    SENDING_REFUND: 'Refunding to your address…',
    REFUNDED: 'Refund completed!',
    EXPIRED: 'Swap expired',
  },
  es: {
    WAITING: 'Esperando tu depósito…',
    PENDING: 'Transacción encontrada.<br />Esperando confirmaciones…',
    SIGNING: 'Firmando tu cambio…',
    SENDING: 'Enviando a tu dirección…',
    COMPLETED: '¡Cambio completado!',
    SIGNING_REFUND: 'Firmando tu reembolso…',
    SENDING_REFUND: 'Reembolsando a tu dirección…',
    REFUNDED: '¡Reembolso completado!',
    EXPIRED: 'Cambio expirado',
  },
  gl: {
    WAITING: 'Esperando o teu depósito…',
    PENDING: 'Transacción atopada.<br />Esperando confirmacións…',
    SIGNING: 'Firmando o teu cambio…',
    SENDING: 'Enviando ao teu enderezo…',
    COMPLETED: '¡Cambio completado!',
    SIGNING_REFUND: 'Firmando o teu reembolso…',
    SENDING_REFUND: 'Reembolsando ao teu enderezo…',
    REFUNDED: '¡Reembolso completado!',
    EXPIRED: 'Cambio expirado',
  },
  'zh-TW': {
    WAITING: '正在等待您的存款交易',
    PENDING: '網絡已檢測到您的存款交易<br />正在交易確認中',
    SIGNING: '正在簽名您的兌換',
    SENDING: '發送至您的收款地址',
    COMPLETED: '完成此兌換！',
    SIGNING_REFUND: '正將退款',
    SENDING_REFUND: '正將退款',
    REFUNDED: '已退款',
    EXPIRED: '已失效',
  },
  zh: {
    WAITING: '正在等待您的存款交易',
    PENDING: '网络已检测到您的存款交易<br />正在交易确认中',
    SIGNING: '正在签名您的兑换',
    SENDING: '发送至您的收款地址',
    COMPLETED: '完成此兑换！',
    SIGNING_REFUND: '正将退款',
    SENDING_REFUND: '正将退款',
    REFUNDED: '已退款',
    EXPIRED: '已失效',
  },
  ja: {
    WAITING: '受信待ち',
    PENDING: '承認待ち',
    SIGNING: 'トランザクションへの署名中',
    SENDING: '受取アドレスへ送信中',
    COMPLETED: 'スワップは完了されました！',
    SIGNING_REFUND: '送信元アドレスへ返金中',
    SENDING_REFUND: '送信元アドレスへ返金中',
    REFUNDED: '送信元アドレスへ返金済み',
    EXPIRED: '一定期間内にて入金が確認されなかった為、<br />当スワップは失効されました。',
  },
};

export const defaultMessages = ({ locale }: { locale: string }): Messages => {
  if (Object.keys(values).includes(locale)) {
    return values[locale];
  }

  return values['en'];
};
