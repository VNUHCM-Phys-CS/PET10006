import Box from '@mui/material/Box';
import { alpha } from '@mui/material';
import "./schedule.css";

export default function Schedule ({activeStep}){
    return <Box
    sx={(theme) => ({
      mt: { xs: 8, sm: 10 },
      alignSelf: 'center',
      height: { xs: 200, sm: 700 },
      width: '100%',
      borderRadius: '10px',
      outline: '1px solid',
      outlineColor:
        theme.palette.mode === 'light'
          ? alpha('#BFCCD9', 0.5)
          : alpha('#9CCCFC', 0.1),
      boxShadow:
        theme.palette.mode === 'light'
          ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
          : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
    })}
  >
    <svg 
    viewBox="0 0 6416 3130" 
    style={{width:'100%',height:'100%'}} 
    className="schedule-svg"
    overflow="hidden">
        <defs><clipPath id="clip0"><rect x="-3" y="450" width="6416" height="3130"/></clipPath></defs>
        <g clip-path="url(#clip0)" transform="translate(3 -450)">
            <path d="M1143.01 741.5C1099.07 959.571 1055.12 1177.64 1240.06 1349.62 1425.01 1521.6 1853.66 1696.27 2252.66 1773.36 2651.66 1850.45 3061.45 1967.98 3634.07 1812.18 4206.69 1656.37 5324.43 768.456 5688.38 838.54 6052.33 908.625 6050.72 1870.94 5817.79 2232.68 5584.86 2594.43 4794.94 2875.85 4290.8 3009.01 3786.66 3142.17 3289.79 3086.91 2792.93 3031.65" stroke="#A6A6A6" stroke-width="20.625" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="82.5 61.875" fill="none" fill-rule="evenodd"/>
            <g transform="translate(1150,750)">
                <circle r="100" fill-rule="evenodd" className={`node ${activeStep>=1&&"active-node"}`}/>
            </g>
            <g transform="translate(1250,1350)">
                <circle r="250" fill-rule="evenodd" className={`node ${activeStep>=2&&"active-node"}`}/>
            </g>
            <g transform="translate(2260,1680)">
                <circle r="380" fill-rule="evenodd" className={`node ${activeStep>=3&&"active-node"}`}/>
            </g>
            <g transform="translate(3600,1760)">
                <circle r="380" fill-rule="evenodd" className={`node ${activeStep>=4&&"active-node"}`}/>
            </g>
            <g transform="translate(4660,1350)">
                <circle r="380" fill-rule="evenodd" className={`node ${activeStep>=5&&"active-node"}`}/>
            </g>
            <g transform="translate(5700,835)">
                <circle r="380" fill-rule="evenodd" className={`node ${activeStep>=6&&"active-node"}`}/>
            </g>
            <g transform="translate(5800,2285)">
                <circle r="380" fill-rule="evenodd" className={`node ${activeStep>=7&&"active-node"}`}/>
            </g>
            <g transform="translate(4800,2285)">
                <circle r="300" fill-rule="evenodd" className={`node ${activeStep>=8&&"active-node"}`}/>
            </g>
            <g transform='translate(2780,3070)'>
                <g className={`node ${activeStep>=9&&"active-node"}`} >
                    <circle r="300" opacity="0"/>
                    <g transform='translate(-2780,-3070)'>
                        <path d="M526.604 117.396 519.896 57.0209 446.104 130.813 450.129 165.696 342.796 273.029C333.404 268.333 322.671 264.979 311.267 264.979 274.371 264.979 244.183 295.167 244.183 332.063 244.183 368.958 274.371 399.146 311.267 399.146 348.163 399.146 378.35 368.958 378.35 332.063 378.35 320.658 375.667 310.596 370.971 301.204L478.304 193.871 513.188 197.896 586.979 124.104 526.604 117.396Z" transform="matrix(1 0 0 1.00155 2463 2690)"/><path d="M531.971 216.679 523.25 226.071 510.504 224.729 496.417 222.717C515.2 254.917 526.604 291.813 526.604 332.063 526.604 450.129 430.004 546.729 311.938 546.729 193.871 546.729 97.2709 450.129 97.2709 332.063 97.2709 213.996 193.871 117.396 311.938 117.396 351.517 117.396 389.083 128.129 421.283 147.583L419.942 134.167 417.929 120.75 427.321 111.358 432.017 106.663C395.792 87.8792 355.542 77.1459 311.938 77.1459 171.063 77.1459 57.0209 191.188 57.0209 332.063 57.0209 472.938 171.063 586.979 311.938 586.979 452.813 586.979 566.854 472.938 566.854 332.063 566.854 288.458 556.121 248.208 536.667 212.654L531.971 216.679Z" transform="matrix(1 0 0 1.00155 2463 2690)"/><path d="M423.967 286.446C430.004 300.533 432.688 315.963 432.688 332.063 432.688 398.475 378.35 452.813 311.938 452.813 245.525 452.813 191.188 398.475 191.188 332.063 191.188 265.65 245.525 211.313 311.938 211.313 328.038 211.313 343.467 214.667 357.554 220.033L387.742 189.846C364.933 177.771 339.442 171.063 311.938 171.063 223.388 171.063 150.938 243.513 150.938 332.063 150.938 420.613 223.388 493.063 311.938 493.063 400.488 493.063 472.938 420.613 472.938 332.063 472.938 304.558 466.229 279.067 454.154 256.258L423.967 286.446Z" transform="matrix(1 0 0 1.00155 2463 2690)"/>
                    </g>
                </g>
            </g>
            <text fill="#3B41C9" font-family="Arial,Arial_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 1829.94 2203)">Đối tượng và lớp</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 193.711 791)">Giới thiệu về OOP</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="147" transform="matrix(1 0 0 1 1137.41 1384)">C++</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 1935.79 1687)">Object vs Class</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 3295.06 1784)">Encapsulation</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 4403.64 1388)">Inheritance</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 3306.89 2282)">Tính đóng gói</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 4381.07 1875)">Tính kế thừa</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 5380.17 859)">Polymorphism</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 5427.73 1346)">Tính đa hình</text><text fill="#FFC000" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 5565.68 2313)">Abstraction</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 5464.28 2800)">Tính trừu tượng</text><text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 3756.2 3447)">Cơ chế kiểm lỗi và xử lý lỗi</text>
            <g>
                <g>
                    <g>
                        <path d="M4280.4 2805.37C4288.63 2809.27 4295.57 2815.77 4300.33 2823.57 4305.97 2832.23 4309.43 2840.9 4311.17 2849.57 4293.83 2860.83 4282.57 2880.33 4282.57 2902.43 4282.57 2909.8 4283.87 2916.73 4286.03 2923.67L4405.63 2923.67C4411.7 2906.33 4410.83 2885.97 4397.4 2864.73 4393.93 2859.1 4389.17 2854.33 4383.97 2850.43 4385.7 2841.33 4389.6 2832.23 4395.23 2823.13 4400.43 2815.33 4407.37 2808.83 4415.17 2804.93 4419.5 2802.77 4421.23 2797.57 4419.07 2793.23 4416.9 2788.9 4411.7 2787.17 4407.37 2789.33 4396.53 2794.97 4387 2803.2 4380.5 2813.6 4374 2823.57 4370.1 2833.1 4367.93 2842.2 4353.63 2837.43 4339.77 2837.43 4327.2 2841.33 4325.03 2832.67 4320.7 2823.13 4314.63 2813.6 4308.13 2803.2 4298.6 2794.53 4287.77 2789.33 4283.43 2787.17 4278.23 2788.9 4276.07 2793.23 4273.9 2797.57 4276.07 2803.63 4280.4 2805.37Z" fill="#FFC000"/>
                        <path d="M4524.8 3060.6 4472.8 3009.03C4471.07 3007.73 4468.9 3006.87 4466.3 3006.43L4431.2 3006.43C4430.33 2999.5 4429.03 2992.13 4427.3 2985.2L4463.27 2977.83C4468.03 2976.97 4471.93 2973.07 4473.23 2968.73L4494.9 2889.87C4496.63 2882.93 4492.73 2876 4485.8 2873.83 4478.87 2872.1 4471.93 2876 4469.77 2882.93L4450.27 2954 4420.37 2960.07C4417.77 2953.57 4415.17 2948.37 4412.13 2944.9L4281.27 2944.9C4278.23 2948.37 4275.2 2953.57 4273.03 2960.5L4237.5 2953.57 4221.9 2883.37C4220.17 2876.43 4213.23 2872.1 4206.3 2873.4 4199.37 2875.13 4195.03 2882.07 4196.33 2889L4213.67 2967.87C4214.97 2973.07 4218.87 2976.97 4224.07 2977.83L4265.67 2985.63C4264.37 2992.57 4263.07 2999.5 4261.77 3006L4229.27 3006C4227.1 3006.43 4224.93 3007.3 4222.77 3008.6L4170.77 3060.17C4165.13 3064.5 4163.83 3072.73 4168.17 3078.37 4172.5 3084 4180.73 3085.3 4186.37 3080.97L4235.77 3032 4258.73 3032C4258.3 3035.9 4258.3 3039.37 4258.3 3041.97 4258.3 3048.9 4259.17 3055.83 4260.9 3062.33L4227.97 3071C4223.63 3071.87 4220.6 3074.9 4218.87 3079.23L4191.57 3153.33C4188.97 3160.27 4192.43 3167.63 4199.37 3169.8 4200.67 3170.23 4202.4 3170.67 4203.7 3170.67 4208.9 3170.67 4214.1 3167.2 4215.83 3162L4240.53 3093.97 4270.43 3086.6C4283.43 3108.7 4305.53 3124.73 4331.97 3128.63 4335.87 3125.6 4338.47 3120.83 4338.47 3115.63L4338.47 3032.43C4338.47 3027.67 4342.37 3024.2 4346.7 3024.2 4351.47 3024.2 4354.93 3028.1 4354.93 3032.43L4354.93 3116.07C4354.93 3121.27 4357.53 3126.03 4361 3129.07 4387 3124.73 4409.1 3108.7 4422.1 3086.17L4454.6 3094.4 4479.3 3162.43C4481.03 3167.63 4486.23 3171.1 4491.43 3171.1 4492.73 3171.1 4494.47 3170.67 4495.77 3170.23 4502.7 3167.63 4506.17 3160.27 4503.57 3153.77L4476.27 3079.23C4474.97 3075.33 4471.5 3072.3 4467.17 3071L4431.63 3061.9C4432.93 3055.4 4433.8 3048.9 4433.8 3042.4 4433.8 3039.37 4433.8 3035.9 4433.37 3032.43L4459.37 3032.43 4508.33 3081.83C4513.97 3086.17 4522.2 3084.87 4526.53 3079.23 4531.73 3073.17 4530.43 3064.93 4524.8 3060.6Z" fill="#FFC000"/>
                    </g>
                </g>
            </g>
            <text fill="#3B41C9" font-family="Calibri,Calibri_MSFontService,sans-serif" font-weight="700" font-size="105" transform="matrix(1 0 0 1 2620.19 3400)">Đồ án</text>
            </g>
            </svg>
  </Box>
}