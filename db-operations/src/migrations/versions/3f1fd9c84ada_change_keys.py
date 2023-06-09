"""change keys

Revision ID: 3f1fd9c84ada
Revises: 3a9e3ce161f4
Create Date: 2022-11-22 09:44:58.926889

"""
from alembic import op
import sqlalchemy as sa
import src
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '3f1fd9c84ada'
down_revision = '3a9e3ce161f4'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('acto-clinico', 'fecha_inicio')
    op.drop_column('acto-clinico', 'ns')
    op.drop_column('acto-clinico', 'estado')
    op.drop_column('acto-clinico', 'fecha_fin')
    op.drop_column('acto-clinico', 'tipo')
    op.drop_column('acto-clinico', 'id_gravedad')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('acto-clinico', sa.Column('id_gravedad', mysql.SMALLINT(display_width=6), autoincrement=False, nullable=True))
    op.add_column('acto-clinico', sa.Column('tipo', mysql.VARCHAR(length=17), nullable=True))
    op.add_column('acto-clinico', sa.Column('fecha_fin', mysql.DATETIME(), nullable=True))
    op.add_column('acto-clinico', sa.Column('estado', mysql.VARCHAR(length=16), nullable=True))
    op.add_column('acto-clinico', sa.Column('ns', mysql.VARCHAR(length=6), nullable=True))
    op.add_column('acto-clinico', sa.Column('fecha_inicio', mysql.DATETIME(), nullable=True))
    # ### end Alembic commands ###
