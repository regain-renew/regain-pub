"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { appointmentBenefits, programOptions } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

type AppointmentFormState = {
  name: string;
  phone: string;
  program: string;
  preferredDate: string;
  message: string;
  agreed: boolean;
};

const initialState: AppointmentFormState = {
  name: "",
  phone: "",
  program: programOptions[0],
  preferredDate: "",
  message: "",
  agreed: false,
};

function handleAppointmentSubmit(data: AppointmentFormState) {
  console.log("Private appointment request", data);
  window.alert("상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.");
}

export function PrivateAppointmentForm() {
  const [formState, setFormState] = useState<AppointmentFormState>(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAppointmentSubmit(formState);
    setFormState(initialState);
  };

  return (
    <FadeInSection id="private-appointment" className="section section--appointment">
      <div className="shell appointment">
        <div className="appointment__media">
          <Image
            src={assetPath("/images/regain/appointment-lobby.jpg")}
            alt="리겐의원 프라이빗 상담 공간"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <div className="appointment__intro">
            <SectionTitle
              eyebrow="PRIVATE APPOINTMENT"
              title="프라이빗 상담 예약"
              description="개인 맞춤 상담을 통해 당신에게 가장 적합한 회복 플랜을 설계해 드립니다."
            />
            <div className="appointment-benefits">
              {appointmentBenefits.slice(0, 3).map((benefit, index) => (
                <div key={benefit} className="appointment-benefit">
                  <span className="appointment-benefit__index">0{index + 1}</span>
                  <strong>{benefit}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="appointment-form" onSubmit={onSubmit}>
          <label>
            이름
            <input
              type="text"
              value={formState.name}
              onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              required
            />
          </label>
          <label>
            연락처
            <input
              type="tel"
              value={formState.phone}
              onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
              required
            />
          </label>
          <label>
            관심 프로그램
            <select
              value={formState.program}
              onChange={(event) => setFormState({ ...formState, program: event.target.value })}
            >
              {programOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            상담 희망일
            <input
              type="date"
              value={formState.preferredDate}
              onChange={(event) =>
                setFormState({ ...formState, preferredDate: event.target.value })
              }
            />
          </label>
          <label className="appointment-form__full">
            문의 내용
            <textarea
              rows={5}
              value={formState.message}
              onChange={(event) => setFormState({ ...formState, message: event.target.value })}
              placeholder="상담을 원하는 내용이나 현재 고민을 입력해 주세요."
            />
          </label>
          <label className="appointment-form__agree appointment-form__full">
            <input
              type="checkbox"
              checked={formState.agreed}
              onChange={(event) => setFormState({ ...formState, agreed: event.target.checked })}
              required
            />
            개인정보 수집 및 이용에 동의합니다.
          </label>
          <button type="submit" className="button button--primary appointment-form__submit">
            프라이빗 상담 신청
          </button>
        </form>
      </div>
    </FadeInSection>
  );
}
