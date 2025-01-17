import React from 'react'
import styles from '../../styles.module.css'

const BaseIcon = (props: any) => {
  return (
    <span role='img' className={styles.icon} {...props}>
      {props.children}
    </span>
  )
}

export const MetamaskIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      height='355'
      viewBox='0 0 397 355'
      width='397'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fill='none' fillRule='evenodd' transform='translate(-1 -1)'>
        <path
          d='m114.622644 327.195472 52.004717 13.810198v-18.05949l4.245283-4.249292h29.716982v21.246459 14.872523h-31.839624l-39.268868-16.997169z'
          fill='#cdbdb2'
        />
        <path
          d='m199.528305 327.195472 50.943397 13.810198v-18.05949l4.245283-4.249292h29.716981v21.246459 14.872523h-31.839623l-39.268868-16.997169z'
          fill='#cdbdb2'
          transform='matrix(-1 0 0 1 483.96227 0)'
        />
        <path
          d='m170.872644 287.889523-4.245283 35.056657 5.306604-4.249292h55.18868l6.367925 4.249292-4.245284-35.056657-8.490565-5.311615-42.452832 1.062323z'
          fill='#393939'
        />
        <path
          d='m142.216984 50.9915022 25.471698 59.4900858 11.674528 173.158643h41.391511l12.735849-173.158643 23.349056-59.4900858z'
          fill='#f89c35'
        />
        <path
          d='m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z'
          fill='#f89d35'
        />
        <path
          d='m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z'
          fill='#d87c30'
        />
        <path
          d='m87.0283032 192.280457 36.0849058 33.994334v33.994334z'
          fill='#ea8d3a'
        />
        <path
          d='m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z'
          fill='#f89d35'
        />
        <path
          d='m123.113209 261.331448-8.490565 65.864024 56.25-39.305949z'
          fill='#eb8f35'
        />
        <path
          d='m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z'
          fill='#ea8e3a'
        />
        <path
          d='m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z'
          fill='#d87c30'
        />
        <path
          d='m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z'
          fill='#eb8f35'
        />
        <path
          d='m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z'
          fill='#e8821e'
        />
        <path
          d='m114.622644 327.195472 56.25-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z'
          fill='#dfcec3'
        />
        <path
          d='m229.245286 327.195472 55.18868-39.305949-4.245283 33.994334v19.121813l-38.207548-7.43626z'
          fill='#dfcec3'
          transform='matrix(-1 0 0 1 513.679252 0)'
        />
        <path
          d='m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z'
          fill='#393939'
          transform='matrix(-1 0 0 1 283.372646 0)'
        />
        <path
          d='m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z'
          fill='#e88f35'
        />
        <path
          d='m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z'
          fill='#8e5a30'
        />
        <g transform='matrix(-1 0 0 1 399.056611 0)'>
          <path
            d='m30.7783023 181.657226-29.71698153 86.048161 74.29245393-4.249293h47.7594343v-37.181303l-2.122641-76.487253-10.613208 8.498583z'
            fill='#f89d35'
          />
          <path
            d='m87.0283032 191.218134 87.0283028 2.124646-9.551886 44.617563-41.391511-10.623229z'
            fill='#d87c30'
          />
          <path
            d='m87.0283032 192.280457 36.0849058 33.994334v33.994334z'
            fill='#ea8d3a'
          />
          <path
            d='m123.113209 227.337114 42.452831 10.623229 13.79717 45.679888-9.551886 5.311615-46.698115-27.620398z'
            fill='#f89d35'
          />
          <path
            d='m123.113209 261.331448-8.490565 65.864024 55.18868-38.243626z'
            fill='#eb8f35'
          />
          <path
            d='m174.056606 193.34278 5.306604 90.297451-15.919812-46.211049z'
            fill='#ea8e3a'
          />
          <path
            d='m74.2924539 262.393771 48.8207551-1.062323-8.490565 65.864024z'
            fill='#d87c30'
          />
          <path
            d='m24.4103777 355.878193 90.2122663-28.682721-40.3301901-64.801701-73.23113313 5.311616z'
            fill='#eb8f35'
          />
          <path
            d='m167.688682 110.481588-45.636793 38.243627-35.0235858 42.492919 87.0283028 3.186969z'
            fill='#e8821e'
          />
          <path
            d='m132.665096 212.464593-11.674528 24.433427 41.39151-10.623229z'
            fill='#393939'
            transform='matrix(-1 0 0 1 283.372646 0)'
          />
          <path
            d='m23.349057 1.06232296 144.339625 109.41926504-24.410378-59.4900858z'
            fill='#e88f35'
          />
          <path
            d='m23.349057 1.06232296-19.10377392 58.42776294 10.61320772 63.7393781-7.42924541 4.249292 10.61320771 9.560906-8.49056617 7.436261 11.67452847 10.623229-7.4292454 6.373938 16.9811323 21.246459 79.5990577-24.433428c38.915096-31.161473 58.018869-47.096318 57.311322-47.804533-.707548-.708215-48.820756-37.1813036-144.339625-109.41926504z'
            fill='#8e5a30'
          />
        </g>
      </g>
    </svg>
  </BaseIcon>
)

export const TrustWalletIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 32C24.8365 32 32 24.8366 32 16C32 7.16345 24.8365 0 16 0C7.16345 0 0 7.16345 0 16C0 24.8366 7.16345 32 16 32Z'
        fill='#3375BB'
      />
      <path
        d='M16.1132 7C19.2752 9.6408 22.9013 9.47795 23.9373 9.47795C23.7107 24.4968 21.984 21.5186 16.1132 25.73C10.2424 21.5186 8.52645 24.4968 8.2998 9.47795C9.32505 9.47795 12.9511 9.6408 16.1132 7Z'
        stroke='white'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </BaseIcon>
)


export const BraveIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg width="32" height="32" viewBox="0 0 256 301" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <defs>
            <linearGradient x1="0%" y1="50.017894%" x2="100.096998%" y2="50.017894%" id="linearGradient-1">
                <stop stopColor="#FFFFFF" offset="0%"></stop>
                <stop stopColor="#FFFFFF" stopOpacity="0.9576" offset="14.13%"></stop>
                <stop stopColor="#FFFFFF" stopOpacity="0.7" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="-0.0390588235%" y1="49.9824538%" x2="100%" y2="49.9824538%" id="linearGradient-2">
                <stop stopColor="#F1F1F2" offset="0%"></stop>
                <stop stopColor="#E4E5E6" offset="9.191442%"></stop>
                <stop stopColor="#D9DADB" offset="23.57%"></stop>
                <stop stopColor="#D2D4D5" offset="43.8%"></stop>
                <stop stopColor="#D0D2D3" offset="100%"></stop>
            </linearGradient>
        </defs>
      <g>
        <path d="M256,97.1 L246.7,72 L253.1,57.6 C253.9,55.7 253.5,53.6 252.1,52.1 L234.6,34.4 C226.9,26.7 215.5,24 205.2,27.6 L200.3,29.3 L173.5,0.3 L128.2,0 L127.9,0 L82.3,0.4 L55.6,29.6 L50.8,27.9 C40.4,24.2 28.9,26.9 21.2,34.8 L3.4,52.8 C2.2,54 1.9,55.7 2.5,57.2 L9.2,72.2 L0,97.3 L6,120 L33.2,223.3 C36.3,235.2 43.5,245.6 53.6,252.8 C53.6,252.8 86.6,276.1 119.1,297.2 C122,299.1 125,300.4 128.2,300.4 C131.4,300.4 134.4,299.1 137.3,297.2 C173.9,273.2 202.8,252.7 202.8,252.7 C212.8,245.5 220,235.1 223.1,223.2 L250.1,119.9 L256,97.1 Z" fill="#F15A22"></path>
        <path d="M34.5,227.7 L0,99.5 L10.1,74.4 L3.1,55.8 L19.8,38.8 C25.3,33.9 36.1,32.2 41.1,35.1 L67.2,50.1 L101.2,58 L127.7,47 L129.9,274.7 C129.5,307.5 131.6,304 107.5,288.5 L48,248.6 C41.6,242.5 36.7,235.6 34.5,227.7 Z" fill="url(#linearGradient-1)" opacity="0.15"></path>
        <path d="M202.2,252.245742 L151.6,286.845742 C137.5,294.545742 130.7,302.145742 129.6,298.445742 C128.7,295.545742 129.4,287.045742 129.1,273.845742 L128.5,51.1457423 C128.6,48.9457423 130.1,45.2457423 132.7,45.6457423 L158.5,53.4457423 L195.7,47.6457423 L220.3,29.5457423 C222.9,27.5457423 226.7,27.7457423 229.1,30.0457423 L251.1,51.0457423 C253.1,53.1457423 253.2,57.2457423 252,59.8457423 L245.9,71.1457423 L256,97.2457423 L221.2,226.645742 C215.8,242.745742 208.2,246.945742 202.2,252.245742 Z" fill="url(#linearGradient-2)" opacity="0.4"></path>
        <path d="M134,184.801367 C132.8,184.301367 131.5,183.901367 131.1,183.901367 L129.5,183.901367 L127.9,183.901367 C127.5,183.901367 126.2,184.301367 125,184.801367 L112,190.201367 C110.8,190.701367 108.8,191.601367 107.6,192.201367 L88,202.401367 C86.8,203.001367 86.7,204.101367 87.8,204.901367 L105.1,217.101367 C106.2,217.901367 107.9,219.201367 108.9,220.101367 L116.6,226.701367 C117.6,227.601367 119.2,229.001367 120.2,229.901367 L127.6,236.501367 C128.6,237.401367 130.2,237.401367 131.2,236.501367 L138.8,229.901367 C139.8,229.001367 141.4,227.601367 142.4,226.701367 L150.1,220.001367 C151.1,219.101367 152.8,217.801367 153.9,217.001367 L171.2,204.701367 C172.3,203.901367 172.2,202.801367 171,202.201367 L151.4,192.201367 C150.2,191.601367 148.2,190.701367 147,190.201367 L134,184.801367 Z" fill="#FFFFFF"></path>
        <path d="M227.813299,101.557129 C228.213299,100.257129 228.213299,99.7571289 228.213299,99.7571289 C228.213299,98.4571289 228.113299,96.2571289 227.913299,94.9571289 L226.913299,92.0571289 C226.313299,90.8571289 225.313299,88.9571289 224.513299,87.8571289 L213.213299,71.1571289 C212.513299,70.0571289 211.213299,68.3571289 210.313299,67.2571289 L195.713299,48.9571289 C194.913299,47.9571289 194.113299,47.0571289 194.013299,47.1571289 L193.813299,47.1571289 C193.813299,47.1571289 192.713299,47.3571289 191.413299,47.5571289 L169.113299,51.9571289 C167.813299,52.2571289 165.713299,52.6571289 164.413299,52.8571289 L164.013299,52.9571289 C162.713299,53.1571289 160.613299,53.0571289 159.313299,52.6571289 L140.613299,46.6571289 C139.313299,46.2571289 137.213299,45.6571289 136.013299,45.3571289 C136.013299,45.3571289 132.213299,44.4571289 129.113299,44.5571289 C126.013299,44.5571289 122.213299,45.3571289 122.213299,45.3571289 C120.913299,45.6571289 118.813299,46.2571289 117.613299,46.6571289 L98.9132993,52.6571289 C97.6132993,53.0571289 95.5132993,53.1571289 94.2132993,52.9571289 L93.8132993,52.8571289 C92.5132993,52.6571289 90.4132993,52.1571289 89.1132993,51.9571289 L66.6132993,47.7571289 C65.3132993,47.4571289 64.2132993,47.3571289 64.2132993,47.3571289 L64.0132993,47.3571289 C63.9132993,47.3571289 63.1132993,48.1571289 62.3132993,49.1571289 L47.7132993,67.4571289 C46.9132993,68.4571289 45.6132993,70.2571289 44.8132993,71.3571289 L33.5132993,88.0571289 C32.8132993,89.1571289 31.7132993,91.0571289 31.1132993,92.2571289 L30.1132993,95.1571289 C29.9132993,96.4571289 29.7132993,98.6571289 29.8132993,99.9571289 C29.8132993,99.9571289 29.8132993,100.357129 30.2132993,101.757129 C30.9132993,104.157129 32.6132993,106.357129 32.6132993,106.357129 C33.4132993,107.357129 34.9132993,109.057129 35.8132993,109.957129 L68.9132993,145.157129 C69.8132993,146.157129 70.1132993,147.957129 69.6132993,149.157129 L62.7132993,165.457129 C62.2132993,166.657129 62.1132993,168.657129 62.6132993,169.957129 L64.5132993,175.057129 C66.1132993,179.357129 68.8132993,183.157129 72.4132993,186.057129 L79.1132993,191.457129 C80.1132993,192.257129 81.9132993,192.557129 83.1132993,191.957129 L104.313299,181.857129 C105.513299,181.257129 107.313299,180.057129 108.313299,179.157129 L123.513299,165.457129 C125.713299,163.457129 125.813299,160.057129 123.813299,157.857129 L91.9132993,136.357129 C90.8132993,135.657129 90.4132993,134.057129 91.0132993,132.857129 L105.013299,106.457129 C105.613299,105.257129 105.713299,103.357129 105.213299,102.157129 L103.513299,98.2571289 C103.013299,97.0571289 101.513299,95.6571289 100.313299,95.1571289 L59.2132993,79.7571289 C58.0132993,79.2571289 58.0132993,78.7571289 59.3132993,78.6571289 L85.8132993,76.1571289 C87.1132993,76.0571289 89.2132993,76.2571289 90.5132993,76.5571289 L114.113299,83.1571289 C115.413299,83.5571289 116.213299,84.8571289 116.013299,86.1571289 L107.813299,131.057129 C107.613299,132.357129 107.613299,134.157129 107.913299,135.157129 C108.213299,136.157129 109.513299,137.057129 110.813299,137.357129 L127.213299,140.857129 C128.513299,141.157129 130.613299,141.157129 131.913299,140.857129 L147.213299,137.357129 C148.513299,137.057129 149.813299,136.057129 150.113299,135.157129 C150.413299,134.257129 150.513299,132.357129 150.213299,131.057129 L142.113299,86.1571289 C141.913299,84.8571289 142.713299,83.4571289 144.013299,83.1571289 L167.613299,76.5571289 C168.913299,76.1571289 171.013299,76.0571289 172.313299,76.1571289 L198.813299,78.6571289 C200.113299,78.7571289 200.213299,79.2571289 198.913299,79.7571289 L157.813299,95.3571289 C156.613299,95.8571289 155.113299,97.1571289 154.613299,98.4571289 L152.913299,102.357129 C152.413299,103.557129 152.413299,105.557129 153.113299,106.657129 L167.213299,133.057129 C167.813299,134.257129 167.413299,135.757129 166.313299,136.557129 L134.413299,158.157129 C132.313299,160.257129 132.513299,163.757129 134.713299,165.757129 L149.913299,179.457129 C150.913299,180.357129 152.713299,181.557129 153.913299,182.057129 L175.213299,192.157129 C176.413299,192.757129 178.213299,192.457129 179.213299,191.657129 L185.913299,186.157129 C189.513299,183.257129 192.213299,179.457129 193.713299,175.157129 L195.613299,170.057129 C196.113299,168.857129 196.013299,166.757129 195.513299,165.557129 L188.613299,149.257129 C188.113299,148.057129 188.413299,146.257129 189.313299,145.257129 L222.413299,110.057129 C223.313299,109.057129 224.713299,107.457129 225.613299,106.457129 C225.413299,106.157129 227.213299,103.957129 227.813299,101.557129 Z" fill="#FFFFFF"></path>
      </g>
    </svg>
  </BaseIcon>
)

export const AuthereumIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='data:image/png;base64,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'
      alt='authereumLogo'
    />
  </BaseIcon>
)

export const CoinBaseIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='1024'
      height='1024'
      viewBox='0 0 1024 1024'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='1024' height='1024' rx='512' fill='#0961FF' />
      <path
        d='M512.147 692C412.697 692 332.146 611.45 332.146 512C332.146 412.55 412.697 332 512.147 332C601.247 332 675.197 396.95 689.447 482H870.797C855.497 297.2 700.846 152 512.147 152C313.396 152 152.146 313.25 152.146 512C152.146 710.75 313.396 872 512.147 872C700.846 872 855.497 726.8 870.797 542H689.297C675.047 627.05 601.247 692 512.147 692Z'
        fill='white'
      />
    </svg>
  </BaseIcon>
)

export const TorusIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='data:image/png;base64,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'
      alt='torusLogo'
    />
  </BaseIcon>
)

export const WalletConnectIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg height='512' viewBox='0 0 512 512' width='512'>
      <radialGradient id='a' cx='0%' cy='50%' r='100%'>
        <stop offset='0' stopColor='#5d9df6' />
        <stop offset='1' stopColor='#006fff' />
      </radialGradient>
      <g fill='none' fillRule='evenodd'>
        <path
          d='m256 0c141.384896 0 256 114.615104 256 256s-114.615104 256-256 256-256-114.615104-256-256 114.615104-256 256-256z'
          fill='url(#a)'
        />
        <path
          d='m64.6917558 37.7088298c51.5328072-50.2784397 135.0839942-50.2784397 186.6167992 0l6.202057 6.0510906c2.57664 2.5139218 2.57664 6.5897948 0 9.1037177l-21.215998 20.6995759c-1.288321 1.2569619-3.3771 1.2569619-4.665421 0l-8.534766-8.3270205c-35.950573-35.0754962-94.237969-35.0754962-130.188544 0l-9.1400282 8.9175519c-1.2883217 1.2569609-3.3771016 1.2569609-4.6654208 0l-21.2159973-20.6995759c-2.5766403-2.5139229-2.5766403-6.5897958 0-9.1037177zm230.4934852 42.8089117 18.882279 18.4227262c2.576627 2.5139103 2.576642 6.5897593.000032 9.1036863l-85.141498 83.070358c-2.576623 2.513941-6.754182 2.513969-9.33084.000066-.00001-.00001-.000023-.000023-.000033-.000034l-60.428256-58.957451c-.64416-.628481-1.68855-.628481-2.33271 0-.000004.000004-.000008.000007-.000012.000011l-60.4269683 58.957408c-2.5766141 2.513947-6.7541746 2.51399-9.3308408.000092-.0000151-.000014-.0000309-.000029-.0000467-.000046l-85.14386774-83.071463c-2.57663928-2.513921-2.57663928-6.589795 0-9.1037163l18.88231264-18.4226955c2.5766393-2.5139222 6.7541993-2.5139222 9.3308397 0l60.4291347 58.9582758c.6441608.62848 1.6885495.62848 2.3327103 0 .0000095-.000009.0000182-.000018.0000277-.000025l60.4261065-58.9582508c2.576581-2.51398 6.754142-2.5140743 9.33084-.0002103.000037.0000354.000072.0000709.000107.0001063l60.429056 58.9583548c.644159.628479 1.688549.628479 2.332709 0l60.428079-58.9571925c2.57664-2.5139231 6.754199-2.5139231 9.330839 0z'
          fill='#fff'
          fillRule='nonzero'
          transform='translate(98 160)'
        />
      </g>
    </svg>
  </BaseIcon>
)

export const FortmaticIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA3lBMVEUAAABoUf9oUP9qU/9rU/9qUv9qU/9qU/9rU/9pUf9oUf9pUv9pUf9pUv9pUv9oUf9pUv9pUv9pUv9qUv9oUf8tKf9pUv9nUP9nUf9pUv9qUv9qUv9pUv9pUf9pUf9oUf9oUf9pUf9qUv9qUf9oUf9qUv9qUv9oUf9pUf9pUf9qUv9qUv9qUv9qUv9oUf9pUf9oUf9pUv9oUf9oUf9qUv9pU/9pUf9oUf9qUv9oUf9oUf9pUf9pUv9qUv9qUv9qUv9qUv9qUv9pUv9pUv9qUv9sVP9rVP9oUv9nUf9oUf4OW/twAAAASnRSTlMAAAAAADZybjOC/3l9dXjvxMXNW7oAAAABEBESCBDQ6ebvaRLqdnTn6AQ1Ozo50ADBXMP0IwCWxA7L85Q3dXBzUlVbIQAAAAAAAIE6emkAAADdSURBVHjaY2AYfoARjxQTMocZt0IWVENY2dixAjYONH2cXDgAN5pCHlwKeQdOIR9WhfwCgmhASBirQhEs4SgqRqRCFnEiFRJtNW6FaAlEDLfVEpJScCAtg8dqWTl5BRhQVMKjUFkFKcBV8SlUQFKoRhWF6sQq1CBSoaaWto6Ojq4eIYX6UCEDsJAh4Sg0AokYmzCYEqXQjIFBnBiF5hZwl6BkVwNkIUsuK2sL9DTBYGNrZ2dn74As5OjkzMAgxoRavrhAGa5w/fpu4DTGhKOQcodLMHowMHh6MAxPAAAR1CA8NOzQDgAAAABJRU5ErkJggg=='
      alt='FortmaticLogo'
    />
  </BaseIcon>
)

export const MagicIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      width='26'
      height='31'
      viewBox='0 0 26 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.8533 0C14.1947 1.64317 15.6741 3.16914 17.274 4.56019C16.2081 8.01821 15.6342 11.6921 15.6342 15.5C15.6342 19.308 16.2081 22.9818 17.274 26.4399C15.6742 27.8309 14.1947 29.3568 12.8533 31C11.5121 29.357 10.0328 27.8312 8.43313 26.4403C9.49916 22.9821 10.0731 19.3081 10.0731 15.5C10.0731 11.6919 9.49916 8.01785 8.43312 4.55968C10.0328 3.16877 11.5121 1.64297 12.8533 0Z'
        fill='#6851FF'
      />
      <path
        d='M5.37476 24.049C3.68158 22.8621 1.88466 21.8131 0.000297072 20.9184C0.523041 19.2046 0.804248 17.3854 0.804248 15.5005C0.804248 13.6153 0.522934 11.7958 0 10.0817C1.88446 9.18693 3.68148 8.13791 5.37474 6.95092C6.02224 9.69542 6.36486 12.5577 6.36486 15.5C6.36486 18.4423 6.02225 21.3046 5.37476 24.049Z'
        fill='#6851FF'
      />
      <path
        d='M19.3416 15.5C19.3416 18.4423 19.6842 21.3046 20.3317 24.0492C22.0252 22.862 23.8224 21.8129 25.7071 20.9181C25.1845 19.2043 24.9033 17.3853 24.9033 15.5005C24.9033 13.6155 25.1846 11.7961 25.7074 10.0821C23.8226 9.18729 22.0253 8.1381 20.3317 6.95089C19.6842 9.6954 19.3416 12.5577 19.3416 15.5Z'
        fill='#6851FF'
      />
    </svg>
  </BaseIcon>
)

export const PortisIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='data:image/png;base64,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'
      alt='PortisLogo'
    />
  </BaseIcon>
)

export const LedgerIcon = (props: any) => (
  <BaseIcon {...props}>
    <img
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAAAQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTQQJTT///9f2ut/AAAAPHRSTlMAADKJzvH8/flQN/D+zYgwFIHj+/LifxMhtLEftQGDNOSN0vRWVBs1Ee1MUfPv5jYMTxn49dOO5YYWuCPK2hOYAAAAAWJLR0Q90G1RWQAAAAlwSFlzAAAsSgAALEoBd3p0TQAAAAd0SU1FB+UMEQ4pC34ClgMAAAFJSURBVEjH7dfZcoIwFIDhE5WAuKHgWhH3DS21dW/e/7lqLGjsaE2O7bQX/Jdn8t1AwhAAciiRTGlU13UjTYBHzExWvxXVcvkCV8CtVSyxz+wTdti3lStVrgmp1U8zacxY44ljq8kwmDWqBNwWw2FWIeC1sbhcgA7DYpaHLh7noIfHGjA8po9g/QcxVcQXe95QxH2xwVANky8p4avF+Jee9kjMG6thTWwyfWRv+391qmIc47v4vD1nEjgLjtg8Ohje88y5WwZMsSA6ki+eKdGNj4FcEKeY5NO+vjYttngNV42n/nnqT6PXP7xYnQZbiL4twlXBnArjiReOB4Ywtg2p3wptFI77uvqp+neYwhKPNVjhcQrWeJyEYIPFpQS4WywuHi4ouz0O1y1+NXrfY3CzdrxXkd12o4rbLSu60rnBerWUx71ux3O5/QCGl/Jth/cmBQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMi0xN1QxNDo0MTowNCswMDowMIbau/wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTItMTdUMTQ6NDE6MDQrMDA6MDD3hwNAAAAAAElFTkSuQmCC'
      alt='ledgerLogo'
    />
  </BaseIcon>
)

export const FrameIcon = (props: any) => (
  <BaseIcon {...props}>
    <svg
      id='Layer_2'
      data-name='Layer 2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 153.42 152.94'
    >
      <title>FrameLogo4</title>
      <path
        d='M145.15,75.59v-58a9.29,9.29,0,0,0-9.3-9.28H77.65a2.24,2.24,0,0,1-1.56-.64l-7-7A2.24,2.24,0,0,0,67.48,0H9.31A9.29,9.29,0,0,0,0,9.27H0v58a2.16,2.16,0,0,0,.65,1.55l7,7a2.16,2.16,0,0,1,.65,1.55v58a9.29,9.29,0,0,0,9.3,9.28H75.8a2.24,2.24,0,0,1,1.56.64l7,7a2.24,2.24,0,0,0,1.56.64h58.19a9.29,9.29,0,0,0,9.31-9.27h0v-58a2.16,2.16,0,0,0-.65-1.55l-7-7A2.17,2.17,0,0,1,145.15,75.59Zm-32.3,38.55H40.65A1.68,1.68,0,0,1,39,112.47V40.53a1.68,1.68,0,0,1,1.67-1.67h72.18a1.68,1.68,0,0,1,1.67,1.67v71.94a1.68,1.68,0,0,1-1.67,1.67Z'
        transform='translate(0 0)'
      ></path>
    </svg>
  </BaseIcon>
)

export default {
  AuthereumIcon,
  CoinBaseIcon,
  BraveIcon,
  MetamaskIcon,
  TorusIcon,
  TrustWalletIcon,
  WalletConnectIcon,
  FortmaticIcon,
  MagicIcon,
  PortisIcon,
  LedgerIcon,
  FrameIcon
}
