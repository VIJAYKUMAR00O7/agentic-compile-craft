// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qvlfiqcydnyirqlheosn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2bGZpcWN5ZG55aXJxbGhlb3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3ODE3NTksImV4cCI6MjA2MTM1Nzc1OX0.ZtyWIj2IZTa0RH_Z3AZWnvypEtcm-b2wGXPMT1HGjRg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
