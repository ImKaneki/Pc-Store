echo "iniciando instalacion de dependecina por script"
echo "-----------------------------------------------"
pip install --user --upgrade pip
echo "actualizando pip"
pip install --user -r requirements.txt
echo "instalando dependencias"
pip install --upgrade reflex
echo "elimando requirements"
rm -rf requirements.txt
echo "actualizando requirements"
pip freeze >> requirements.txt
echo "Terminado abrir otra terminal u ejecutar 'reflex run' "