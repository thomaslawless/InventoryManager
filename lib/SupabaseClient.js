import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://adratxgkrmseeqvznxaj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkcmF0eGdrcm1zZWVxdnpueGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMTUwMDIsImV4cCI6MTk5NzU5MTAwMn0.AeKW8aS729aYUBB8YYkfNcxSpyD_Sb-62CcDioQ2Vic')