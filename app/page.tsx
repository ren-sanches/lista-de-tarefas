import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, ArrowDownRight, SquarePen, Trash, ListCheck, Sigma } from 'lucide-react';

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa"></Input>
          <Button variant="default" className="cursor-pointer"><Plus/>Cadastrar</Button>          
        </CardHeader>
        <CardContent>
          <Separator className="mb-4"></Separator>
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default"><List/>Todas</Badge>
            <Badge className="cursor-pointer" variant="outline"><ArrowDownRight/>Não Finalizadas</Badge>
            <Badge className="cursor-pointer" variant="outline"><Check/>concluídas</Badge>
          </div>

          <div className="mt-4 border-b">
            <div className="h-14 flex justify-between items-center border-t">
               <div className="w-1 h-full bg-green-300"></div>
               <p className="flex-1 px-2 text-sm">Estudar React</p>
               <div className="flex gap-2 items-center">
                  <SquarePen size={16} className="cursor-pointer"></SquarePen>
                  <Trash size={16} className="cursor-pointer"></Trash>
               </div>
            </div>

            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                  <SquarePen size={16} className="cursor-pointer"></SquarePen>
                  <Trash size={16} className="cursor-pointer"></Trash>
              </div>
            </div>

            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                  {/* <SquarePen size={16} className="cursor-pointer"></SquarePen> */}
                  <Dialog>
                    <DialogTrigger>
                      <SquarePen size={16} className="cursor-pointer"></SquarePen>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar tarefa</DialogTitle>
                        {/* <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription> */}
                      </DialogHeader>
                      <div className="flex gap-2">
                        <input placeholder="Editar tarefa"></input>
                        <Button className="cursor-pointer">Editar</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Trash size={16} className="cursor-pointer"></Trash>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18}/>
              <p className="text-xs">Tarefas concluídas (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash/>Limpar tarefas concluídas</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Tem certeza que deseja excluir X itens?</AlertDialogTitle>
                  {/* <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    from our servers.
                  </AlertDialogDescription> */}
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{width:"50%"}}></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18}/>
            <p className="text-xs">3 tarefas no total</p>
          </div>

        </CardContent>
        <div></div>
      </Card>
    </main>
  )
}

export default Home