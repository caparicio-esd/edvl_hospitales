"""change keys

Revision ID: 712f0d8b5b23
Revises: 3f1fd9c84ada
Create Date: 2022-11-22 09:45:20.420165

"""
from alembic import op
import sqlalchemy as sa
import src


# revision identifiers, used by Alembic.
revision = '712f0d8b5b23'
down_revision = '3f1fd9c84ada'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('acto-clinico', sa.Column('estado', src.models.types.Varchar(length=16), nullable=True))
    op.add_column('acto-clinico', sa.Column('fecha_inicio', sa.DateTime(), nullable=True))
    op.add_column('acto-clinico', sa.Column('fecha_fin', sa.DateTime(), nullable=True))
    op.add_column('acto-clinico', sa.Column('ns', src.models.types.Varchar(length=6), nullable=True))
    op.add_column('acto-clinico', sa.Column('tipo', src.models.types.Varchar(length=17), nullable=True))
    op.add_column('acto-clinico', sa.Column('id_gravedad', sa.SmallInteger(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('acto-clinico', 'id_gravedad')
    op.drop_column('acto-clinico', 'tipo')
    op.drop_column('acto-clinico', 'ns')
    op.drop_column('acto-clinico', 'fecha_fin')
    op.drop_column('acto-clinico', 'fecha_inicio')
    op.drop_column('acto-clinico', 'estado')
    # ### end Alembic commands ###
