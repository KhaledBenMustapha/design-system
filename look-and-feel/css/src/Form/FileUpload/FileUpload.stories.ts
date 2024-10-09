import type { Meta, StoryObj } from "@storybook/html";
import "../../common/icons.scss";
import "../../Button/Button.stories";
import "./FileUpload.scss";
import "../../Button/Button.scss";

const meta: Meta = {
  title: "Components/Form/Input/FileUpload",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
<label class="af-form__group--label" for="inputtext1">${args.label} ${
      args.required ? "*" : ""
    }</label>
<div>
   <div class="af-form__file-input">
      <div id="uniqueid">
         <div class="af-form__file-input-dropdown-text">
            <p>${args.dropZoneDescription}</p>
            <p>ou</p>
         </div>
         <input accept="image/jpeg, image/png, application/*" type="file" style="position: absolute; inset: 0px; opacity: 0.00001; pointer-events: none;" autocomplete="off" name="placeImage" />
      </div>
      <button class="af-btn-client af-btn-client--tertiary af-btn--hasiconLeft" type="button">
         <svg class="glyphicon glyphicon-plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.325 15H10.825V10.85H15V9.35H10.825V5H9.325V9.35H5V10.85H9.325V15ZM10.0066 20C8.62775 20 7.33192 19.7375 6.11915 19.2125C4.90638 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.093 0.7875 13.879C0.2625 12.665 0 11.3678 0 9.9875C0 8.60718 0.2625 7.31003 0.7875 6.09602C1.3125 4.88201 2.02917 3.825 2.9375 2.925C3.84583 2.025 4.90701 1.3125 6.12103 0.7875C7.33503 0.2625 8.63218 0 10.0125 0C11.3928 0 12.69 0.2625 13.904 0.7875C15.118 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61445 20 9.99335C20 11.3722 19.7375 12.6681 19.2125 13.8809C18.6875 15.0936 17.975 16.1526 17.075 17.0579C16.175 17.9632 15.1167 18.6798 13.9 19.2079C12.6833 19.736 11.3855 20 10.0066 20Z" fill="#00008F"/>
         </svg>
         ${args.buttonLabel}
      </button>
   </div>
   <small class="af-form__file-input-help">2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier</small>
   <div class="custom-table-file af-file-table">
      <ul class="af-form__file-list">
         <li class="af-form__file-line">
            <div class="af-form__file-line-container">
               <div class="af-form__file-title">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.525 15.05L15.6 7.975L14.45 6.85L8.525 12.775L5.525 9.775L4.4 10.9L8.525 15.05ZM10 20.5C8.63333 20.5 7.34167 20.2375 6.125 19.7125C4.90833 19.1875 3.84583 18.4708 2.9375 17.5625C2.02917 16.6542 1.3125 15.5917 0.7875 14.375C0.2625 13.1583 0 11.8667 0 10.5C0 9.11667 0.2625 7.81667 0.7875 6.6C1.3125 5.38333 2.02917 4.325 2.9375 3.425C3.84583 2.525 4.90833 1.8125 6.125 1.2875C7.34167 0.7625 8.63333 0.5 10 0.5C11.3833 0.5 12.6833 0.7625 13.9 1.2875C15.1167 1.8125 16.175 2.525 17.075 3.425C17.975 4.325 18.6875 5.38333 19.2125 6.6C19.7375 7.81667 20 9.11667 20 10.5C20 11.8667 19.7375 13.1583 19.2125 14.375C18.6875 15.5917 17.975 16.6542 17.075 17.5625C16.175 18.4708 15.1167 19.1875 13.9 19.7125C12.6833 20.2375 11.3833 20.5 10 20.5Z" fill="#118635"/>
                  </svg>
                     <div>
                        <span class="af-form__file-name">IMG_8904587880.jpg</span><span class="af-form__file-size">12 Mo</span>
                     </div>
               </div>
               <div class="af-form__file-actions">
                  <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <mask id="mask0_17398_4217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                     </mask>
                     <g mask="url(#mask0_17398_4217)">
                        <path d="M12.003 16.25C13.1843 16.25 14.1875 15.8365 15.0125 15.0096C15.8375 14.1826 16.25 13.1784 16.25 11.997C16.25 10.8157 15.8365 9.8125 15.0096 8.9875C14.1826 8.1625 13.1784 7.75 11.9971 7.75C10.8157 7.75 9.8125 8.16348 8.9875 8.99045C8.1625 9.8174 7.75 10.8216 7.75 12.003C7.75 13.1843 8.16348 14.1875 8.99045 15.0125C9.8174 15.8375 10.8216 16.25 12.003 16.25ZM11.9941 14.8C11.2147 14.8 10.5542 14.5272 10.0125 13.9816C9.47083 13.436 9.2 12.7735 9.2 11.9941C9.2 11.2147 9.47279 10.5542 10.0184 10.0125C10.564 9.47083 11.2265 9.2 12.0059 9.2C12.7853 9.2 13.4458 9.47279 13.9875 10.0184C14.5292 10.564 14.8 11.2265 14.8 12.0059C14.8 12.7853 14.5272 13.4458 13.9816 13.9875C13.436 14.5292 12.7735 14.8 11.9941 14.8ZM12 19.5C9.56667 19.5 7.36667 18.8083 5.4 17.425C3.43333 16.0417 1.96667 14.2333 1 12C1.96667 9.76667 3.43333 7.95833 5.4 6.575C7.36667 5.19167 9.56667 4.5 12 4.5C14.4333 4.5 16.6333 5.19167 18.6 6.575C20.5667 7.95833 22.0333 9.76667 23 12C22.0333 14.2333 20.5667 16.0417 18.6 17.425C16.6333 18.8083 14.4333 19.5 12 19.5Z" fill="#5F5F5F"/>
                     </g>
                  </svg>
                  <svg class="glyphicon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.22497 14.4684L0.0314941 13.275L5.80649 7.49997L0.0314941 1.72497L1.22497 0.531494L6.99997 6.30649L12.775 0.531494L13.9684 1.72497L8.19345 7.49997L13.9684 13.275L12.775 14.4684L6.99997 8.69345L1.22497 14.4684Z" fill="#5F5F5F"/>
                  </svg>
               </div>
            </div>
         </li>
                 <li class="af-form__file-line">
            <div class="af-form__file-line-container">
               <div class="af-form__file-title">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.525 15.05L15.6 7.975L14.45 6.85L8.525 12.775L5.525 9.775L4.4 10.9L8.525 15.05ZM10 20.5C8.63333 20.5 7.34167 20.2375 6.125 19.7125C4.90833 19.1875 3.84583 18.4708 2.9375 17.5625C2.02917 16.6542 1.3125 15.5917 0.7875 14.375C0.2625 13.1583 0 11.8667 0 10.5C0 9.11667 0.2625 7.81667 0.7875 6.6C1.3125 5.38333 2.02917 4.325 2.9375 3.425C3.84583 2.525 4.90833 1.8125 6.125 1.2875C7.34167 0.7625 8.63333 0.5 10 0.5C11.3833 0.5 12.6833 0.7625 13.9 1.2875C15.1167 1.8125 16.175 2.525 17.075 3.425C17.975 4.325 18.6875 5.38333 19.2125 6.6C19.7375 7.81667 20 9.11667 20 10.5C20 11.8667 19.7375 13.1583 19.2125 14.375C18.6875 15.5917 17.975 16.6542 17.075 17.5625C16.175 18.4708 15.1167 19.1875 13.9 19.7125C12.6833 20.2375 11.3833 20.5 10 20.5Z" fill="#118635"/>
                  </svg>
                     <div>
                        <span class="af-form__file-name">IMG_8904587880.jpg</span><span class="af-form__file-size">12 Mo</span>
                     </div>
               </div>
               <div class="af-form__file-actions">
                  <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <mask id="mask0_17398_4217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                     </mask>
                     <g mask="url(#mask0_17398_4217)">
                        <path d="M12.003 16.25C13.1843 16.25 14.1875 15.8365 15.0125 15.0096C15.8375 14.1826 16.25 13.1784 16.25 11.997C16.25 10.8157 15.8365 9.8125 15.0096 8.9875C14.1826 8.1625 13.1784 7.75 11.9971 7.75C10.8157 7.75 9.8125 8.16348 8.9875 8.99045C8.1625 9.8174 7.75 10.8216 7.75 12.003C7.75 13.1843 8.16348 14.1875 8.99045 15.0125C9.8174 15.8375 10.8216 16.25 12.003 16.25ZM11.9941 14.8C11.2147 14.8 10.5542 14.5272 10.0125 13.9816C9.47083 13.436 9.2 12.7735 9.2 11.9941C9.2 11.2147 9.47279 10.5542 10.0184 10.0125C10.564 9.47083 11.2265 9.2 12.0059 9.2C12.7853 9.2 13.4458 9.47279 13.9875 10.0184C14.5292 10.564 14.8 11.2265 14.8 12.0059C14.8 12.7853 14.5272 13.4458 13.9816 13.9875C13.436 14.5292 12.7735 14.8 11.9941 14.8ZM12 19.5C9.56667 19.5 7.36667 18.8083 5.4 17.425C3.43333 16.0417 1.96667 14.2333 1 12C1.96667 9.76667 3.43333 7.95833 5.4 6.575C7.36667 5.19167 9.56667 4.5 12 4.5C14.4333 4.5 16.6333 5.19167 18.6 6.575C20.5667 7.95833 22.0333 9.76667 23 12C22.0333 14.2333 20.5667 16.0417 18.6 17.425C16.6333 18.8083 14.4333 19.5 12 19.5Z" fill="#5F5F5F"/>
                     </g>
                  </svg>
                  <svg class="glyphicon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.22497 14.4684L0.0314941 13.275L5.80649 7.49997L0.0314941 1.72497L1.22497 0.531494L6.99997 6.30649L12.775 0.531494L13.9684 1.72497L8.19345 7.49997L13.9684 13.275L12.775 14.4684L6.99997 8.69345L1.22497 14.4684Z" fill="#5F5F5F"/>
                  </svg>
               </div>
            </div>
         </li>
                <li class="af-form__file-line">
            <div class="af-form__file-line-container af-form__file-line-container--error">
               <div class="af-form__file-title">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <mask id="mask0_17398_4240" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                     </mask>
                     <g mask="url(#mask0_17398_4240)">
                        <path d="M11.9995 17.5C12.2332 17.5 12.4292 17.421 12.5875 17.2629C12.7458 17.1049 12.825 16.9091 12.825 16.6755C12.825 16.4418 12.746 16.2458 12.588 16.0875C12.4299 15.9292 12.2341 15.85 12.0005 15.85C11.7668 15.85 11.5708 15.929 11.4125 16.0871C11.2542 16.2451 11.175 16.4409 11.175 16.6746C11.175 16.9082 11.254 17.1042 11.4121 17.2625C11.5701 17.4208 11.7659 17.5 11.9995 17.5ZM11.325 13.675H12.825V7.35H11.325V13.675ZM12.0066 22.5C10.6278 22.5 9.33192 22.2375 8.11915 21.7125C6.90638 21.1875 5.84583 20.4708 4.9375 19.5625C4.02917 18.6542 3.3125 17.593 2.7875 16.379C2.2625 15.165 2 13.8678 2 12.4875C2 11.1072 2.2625 9.81003 2.7875 8.59602C3.3125 7.38201 4.02917 6.325 4.9375 5.425C5.84583 4.525 6.90701 3.8125 8.12103 3.2875C9.33503 2.7625 10.6322 2.5 12.0125 2.5C13.3928 2.5 14.69 2.7625 15.904 3.2875C17.118 3.8125 18.175 4.525 19.075 5.425C19.975 6.325 20.6875 7.38333 21.2125 8.6C21.7375 9.81667 22 11.1145 22 12.4934C22 13.8722 21.7375 15.1681 21.2125 16.3809C20.6875 17.5936 19.975 18.6526 19.075 19.5579C18.175 20.4632 17.1167 21.1798 15.9 21.7079C14.6833 22.236 13.3855 22.5 12.0066 22.5Z" fill="#C91432"/>
                     </g>
                  </svg>
                  <div>
                     <span class="af-form__file-name">IMG_8904587880.jpg</span><span class="af-form__file-size">12 Mo</span>
                  </div>
               </div>
               <div class="af-form__file-actions">
                  <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <mask id="mask0_17398_4217" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                     </mask>
                     <g mask="url(#mask0_17398_4217)">
                        <path d="M12.003 16.25C13.1843 16.25 14.1875 15.8365 15.0125 15.0096C15.8375 14.1826 16.25 13.1784 16.25 11.997C16.25 10.8157 15.8365 9.8125 15.0096 8.9875C14.1826 8.1625 13.1784 7.75 11.9971 7.75C10.8157 7.75 9.8125 8.16348 8.9875 8.99045C8.1625 9.8174 7.75 10.8216 7.75 12.003C7.75 13.1843 8.16348 14.1875 8.99045 15.0125C9.8174 15.8375 10.8216 16.25 12.003 16.25ZM11.9941 14.8C11.2147 14.8 10.5542 14.5272 10.0125 13.9816C9.47083 13.436 9.2 12.7735 9.2 11.9941C9.2 11.2147 9.47279 10.5542 10.0184 10.0125C10.564 9.47083 11.2265 9.2 12.0059 9.2C12.7853 9.2 13.4458 9.47279 13.9875 10.0184C14.5292 10.564 14.8 11.2265 14.8 12.0059C14.8 12.7853 14.5272 13.4458 13.9816 13.9875C13.436 14.5292 12.7735 14.8 11.9941 14.8ZM12 19.5C9.56667 19.5 7.36667 18.8083 5.4 17.425C3.43333 16.0417 1.96667 14.2333 1 12C1.96667 9.76667 3.43333 7.95833 5.4 6.575C7.36667 5.19167 9.56667 4.5 12 4.5C14.4333 4.5 16.6333 5.19167 18.6 6.575C20.5667 7.95833 22.0333 9.76667 23 12C22.0333 14.2333 20.5667 16.0417 18.6 17.425C16.6333 18.8083 14.4333 19.5 12 19.5Z" fill="#5F5F5F"/>
                     </g>
                  </svg>
                  <svg class="glyphicon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.22497 14.4684L0.0314941 13.275L5.80649 7.49997L0.0314941 1.72497L1.22497 0.531494L6.99997 6.30649L12.775 0.531494L13.9684 1.72497L8.19345 7.49997L13.9684 13.275L12.775 14.4684L6.99997 8.69345L1.22497 14.4684Z" fill="#5F5F5F"/>
                  </svg>
               </div>
            </div>
             <small class="af-form__file-error">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_17398_4251" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                     <rect width="16" height="16" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_17398_4251)">
                     <path d="M7.99992 11.3334C8.18881 11.3334 8.34714 11.2695 8.47492 11.1417C8.6027 11.0139 8.66659 10.8556 8.66659 10.6667C8.66659 10.4778 8.6027 10.3195 8.47492 10.1917C8.34714 10.0639 8.18881 10 7.99992 10C7.81103 10 7.6527 10.0639 7.52492 10.1917C7.39714 10.3195 7.33325 10.4778 7.33325 10.6667C7.33325 10.8556 7.39714 11.0139 7.52492 11.1417C7.6527 11.2695 7.81103 11.3334 7.99992 11.3334ZM7.33325 8.66671H8.66659V4.66671H7.33325V8.66671ZM7.99992 14.6667C7.0777 14.6667 6.21103 14.4917 5.39992 14.1417C4.58881 13.7917 3.88325 13.3167 3.28325 12.7167C2.68325 12.1167 2.20825 11.4112 1.85825 10.6C1.50825 9.78893 1.33325 8.92226 1.33325 8.00004C1.33325 7.07782 1.50825 6.21115 1.85825 5.40004C2.20825 4.58893 2.68325 3.88337 3.28325 3.28337C3.88325 2.68337 4.58881 2.20837 5.39992 1.85837C6.21103 1.50837 7.0777 1.33337 7.99992 1.33337C8.92214 1.33337 9.78881 1.50837 10.5999 1.85837C11.411 2.20837 12.1166 2.68337 12.7166 3.28337C13.3166 3.88337 13.7916 4.58893 14.1416 5.40004C14.4916 6.21115 14.6666 7.07782 14.6666 8.00004C14.6666 8.92226 14.4916 9.78893 14.1416 10.6C13.7916 11.4112 13.3166 12.1167 12.7166 12.7167C12.1166 13.3167 11.411 13.7917 10.5999 14.1417C9.78881 14.4917 8.92214 14.6667 7.99992 14.6667ZM7.99992 13.3334C9.48881 13.3334 10.7499 12.8167 11.7833 11.7834C12.8166 10.75 13.3333 9.48893 13.3333 8.00004C13.3333 6.51115 12.8166 5.25004 11.7833 4.21671C10.7499 3.18337 9.48881 2.66671 7.99992 2.66671C6.51103 2.66671 5.24992 3.18337 4.21659 4.21671C3.18325 5.25004 2.66659 6.51115 2.66659 8.00004C2.66659 9.48893 3.18325 10.75 4.21659 11.7834C5.24992 12.8167 6.51103 13.3334 7.99992 13.3334Z" fill="#C91432"/>
                  </g>
               </svg>
               Erreur : votre fichier dépasse 19 Mo.
            </small>
         </li>
      </ul>
   </div>
</div>
</div>`;

    return container;
  },
  args: {
    label: "Label",
    buttonLabel: "Importer fichier",
    dropZoneDescription: "Glissez/déposez vos fichiers",
    required: true,
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};
