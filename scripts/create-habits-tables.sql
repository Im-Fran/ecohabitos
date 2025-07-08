-- Crear tabla para categorías de hábitos
CREATE TABLE IF NOT EXISTS habit_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla para hábitos individuales
CREATE TABLE IF NOT EXISTS habits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES habit_categories(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  difficulty_level VARCHAR(20) DEFAULT 'easy',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla para el progreso de usuarios
CREATE TABLE IF NOT EXISTS user_habit_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, habit_id)
);

-- Crear tabla para el seguimiento diario
CREATE TABLE IF NOT EXISTS daily_habit_tracking (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, habit_id, date)
);

-- Insertar categorías de hábitos
INSERT INTO habit_categories (name, description, icon) VALUES
('plasticos', 'Reducción de Plásticos', 'Recycle'),
('energia', 'Ahorro Energético', 'Zap'),
('compostaje', 'Compostaje', 'Leaf')
ON CONFLICT DO NOTHING;

-- Insertar hábitos de reducción de plásticos
INSERT INTO habits (category_id, name, description, difficulty_level) 
SELECT 
  hc.id,
  habit_name,
  habit_description,
  'easy'
FROM habit_categories hc,
(VALUES 
  ('Usar botella reutilizable', 'Llevar siempre una botella de agua reutilizable'),
  ('Llevar bolsas de tela para compras', 'Usar bolsas reutilizables en lugar de bolsas plásticas'),
  ('Evitar productos con microplásticos', 'Leer etiquetas y evitar productos que contengan microplásticos'),
  ('Rechazar pajitas/popotes de plástico', 'Decir no a pajitas plásticas en restaurantes y cafeterías'),
  ('Comprar a granel para evitar envases', 'Preferir productos a granel para reducir envases plásticos')
) AS habits_data(habit_name, habit_description)
WHERE hc.name = 'plasticos'
ON CONFLICT DO NOTHING;

-- Insertar hábitos de ahorro energético
INSERT INTO habits (category_id, name, description, difficulty_level) 
SELECT 
  hc.id,
  habit_name,
  habit_description,
  'easy'
FROM habit_categories hc,
(VALUES 
  ('Apagar luces al salir de habitaciones', 'Desarrollar el hábito de apagar las luces cuando no se necesiten'),
  ('Desconectar cargadores sin uso', 'Desconectar cargadores y dispositivos cuando no estén en uso'),
  ('Usar bombillas LED de bajo consumo', 'Reemplazar bombillas tradicionales por LED'),
  ('Aprovechar la luz natural', 'Abrir cortinas y usar luz natural durante el día'),
  ('Regular la temperatura de calefacción/aire acondicionado', 'Mantener temperaturas moderadas para ahorrar energía')
) AS habits_data(habit_name, habit_description)
WHERE hc.name = 'energia'
ON CONFLICT DO NOTHING;

-- Insertar hábitos de compostaje
INSERT INTO habits (category_id, name, description, difficulty_level) 
SELECT 
  hc.id,
  habit_name,
  habit_description,
  difficulty_level
FROM habit_categories hc,
(VALUES 
  ('Separar residuos orgánicos', 'Separar restos de comida y material orgánico', 'easy'),
  ('Crear compostador casero', 'Construir o adquirir un sistema de compostaje', 'medium'),
  ('Mantener equilibrio de materiales secos/húmedos', 'Balancear materiales verdes y marrones en el compost', 'medium'),
  ('Remover el compost regularmente', 'Voltear y airear el compost periódicamente', 'medium'),
  ('Utilizar el compost en plantas', 'Aplicar el compost maduro como fertilizante', 'easy')
) AS habits_data(habit_name, habit_description, difficulty_level)
WHERE hc.name = 'compostaje'
ON CONFLICT DO NOTHING;

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_user_habit_progress_user_id ON user_habit_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_habit_tracking_user_date ON daily_habit_tracking(user_id, date);
CREATE INDEX IF NOT EXISTS idx_habits_category ON habits(category_id);

-- Habilitar RLS (Row Level Security)
ALTER TABLE user_habit_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_habit_tracking ENABLE ROW LEVEL SECURITY;

-- Crear políticas de seguridad
CREATE POLICY "Users can view their own habit progress" ON user_habit_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own habit progress" ON user_habit_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own habit progress" ON user_habit_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own daily tracking" ON daily_habit_tracking
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own daily tracking" ON daily_habit_tracking
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own daily tracking" ON daily_habit_tracking
  FOR UPDATE USING (auth.uid() = user_id);

-- Permitir lectura pública de categorías y hábitos
ALTER TABLE habit_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view habit categories" ON habit_categories
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view habits" ON habits
  FOR SELECT USING (true);
