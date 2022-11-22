"""change keys

Revision ID: 6af438c6b608
Revises: b0db701908c7
Create Date: 2022-11-22 00:56:19.591579

"""
from alembic import op
import sqlalchemy as sa
from src.models.types import Varchar


# revision identifiers, used by Alembic.
revision = '6af438c6b608'
down_revision = 'b0db701908c7'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('acto-clinico', sa.Column('estado', Varchar(length=16), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('acto-clinico', 'estado')
    # ### end Alembic commands ###
