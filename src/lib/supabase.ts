import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitDemoBooking(data: {
  name: string;
  email: string;
  phone: string;
  course: string;
  preferred_date: string;
  preferred_time: string;
}) {
  const { error } = await supabase.from('demo_bookings').insert([data]);
  return { error };
}

export async function submitContactInquiry(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { error } = await supabase.from('contact_inquiries').insert([data]);
  return { error };
}

export async function submitReview(data: {
  name: string;
  course: string;
  rating: number;
  review: string;
}) {
  const { error } = await supabase.from('student_reviews').insert([data]);
  return { error };
}

export async function getReviews() {
  const { data, error } = await supabase
    .from('student_reviews')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
}
