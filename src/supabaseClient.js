import { createClient } from '@supabase/supabase-js';

// Thay thế bằng URL và ANON KEY thật của bạn trong phần Project Settings -> API của Supabase
const supabaseUrl = 'https://bvlsypbxiuqufpewyuek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bHN5cGJ4aXVxdWZwZXd5dWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDY0MTQsImV4cCI6MjA5MDEyMjQxNH0.j2ZDfYqA_ewXQiPsltX4ODlp2fxuQk_Dh_FIiEU0joY'; 

export const supabase = createClient(supabaseUrl, supabaseKey);