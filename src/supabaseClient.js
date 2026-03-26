import { createClient } from '@supabase/supabase-js';

// Thay thế bằng URL và ANON KEY thật của bạn trong phần Project Settings -> API của Supabase
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);