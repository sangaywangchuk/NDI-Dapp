
export interface SignUpPayload {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
}

export interface SignUpInvitePayload {
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
  agree_to_terms: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface GooeyWebhookPayload {
  session_id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface TdiPayload {
  passport_issue_date: string;
  password_expiry_date: string;
  visa_no: string;
  visa_type: string;
  visa_issue_date: string;
  visa_expiry_date: string;
  full_name: string;
  dob: string;
  nationality: string;
  gender: string;
  emergency_contact_info: string;
  blood_group: string;
  address: string;
  passport_no: string;
  passport: null;
  email: string;
  marital_status: string;
  embassy_contact: string;
}

export interface OtpPayload {
  otp: string;
}

export interface ForgotPasswordPayload {
  email_address: string;
}

export interface ResetPasswordPayload {
  password: string;
  confirm_password: string;
}

export interface AddSupervisorPayload {
  email_address: string;
  workspace_ids: string[];
}

